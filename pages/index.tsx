import { gql } from "@apollo/client";
import client from "../apolloClient";
import { GoogleMap, Marker } from "react-google-maps";
import Head from "next/head";
import Header from "../components/Header";
import Section from "../components/Section";
import Spotlight from "../components/Spotlight";
import Map from "../components/Map";

export default function Home({ introduction, sektioner }: any) {
	return (
		<>
			<Head>
				<title>Lindebergs Blomsterhandel, blommor i Eslöv</title>
				<meta
					name="description"
					content="Lindebergs Blomsterhandel i Eslöv har ett brett utbud av olika sorters blommor. 0413-101 25 0413-137 93"
				/>
				<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA3aDP3tXu2iQGbSawtMKNlAucSmF9kQHQ"></script>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header introduction={introduction} />
			<main>
				{sektioner.map((sektion: any) => (
					<Section
						background={sektion.bakgrund}
						title={sektion.titel}
						key={sektion.titel}
					>
						{sektion.puffar.length > 0 && (
							<Spotlight items={sektion.puffar} />
						)}

						{sektion.innehall?.html?.length > 0 && (
							<div
								className="max-w-4xl mx-auto"
								dangerouslySetInnerHTML={{
									__html: sektion.innehall.html,
								}}
							/>
						)}

						{sektion.karta && (
							<Map zoom={sektion.karta.zoom} lat={sektion.karta.latitude} lng={sektion.karta.longitude} />
						)}
					</Section>
				))}
			</main>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query Home {
				introduction(where: { id: "cl3y3z6fddr8w0bus9x7eqamv" }) {
					titel
					paragraph
					phone
				}
				sektioner {
					titel
					innehall {
						html
					}
					puffar {
						... on Puff {
							bild {
								url
							}
							titel
							paragraf
						}
					}
					bakgrund
					karta {
						latitude
						longitude
					}
				}
			}
		`,
	});

	return {
		props: {
			introduction: data.introduction,
			sektioner: data.sektioner,
		},
	};
}
