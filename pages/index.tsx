import { gql } from "@apollo/client";
import client from "../apolloClient";
import Head from "next/head";
import Header from "../components/Header";
import Section from "../components/Section";
import Spotlight from "../components/Spotlight";
import Map from "../components/Map";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import Feed from "../components/Feed";

export default function Home({ introduction, sektioner, sidfot }: any) {
	const pathPrefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

	return (
		<>
			<Head>
				<title>Lindebergs Blomsterhandel, blommor i Eslöv</title>
				<meta
					name="description"
					content="Lindebergs Blomsterhandel i Eslöv har ett brett utbud av olika sorters blommor. 0413-101 25 0413-137 93"
				/>
				<link rel="icon" href={`${pathPrefix}/favicon.ico`} />
			</Head>

			<Header introduction={introduction} />
			<main>
				{sektioner.map((sektion: any) => (
					<Section
						id={sektion.sektionid}
						background={sektion.bakgrund}
						title={sektion.titel}
						key={sektion.titel}
					>
						{sektion.puffar.length > 0 && (
							<Spotlight items={sektion.puffar} />
						)}

						{sektion.facebookFeed && <Feed />}

						{sektion.karta && (
							<Map
								zoom={18}
								lat={sektion.karta.latitude}
								lng={sektion.karta.longitude}
							/>
						)}

						{sektion.partners.length > 0 && (
							<Partners partners={sektion.partners} />
						)}

						{sektion.innehall?.html?.length > 0 && (
							<div
								className="max-w-4xl mx-auto"
								dangerouslySetInnerHTML={{
									__html: sektion.innehall.html,
								}}
							/>
						)}
					</Section>
				))}
			</main>
			<Footer contact={sidfot} />
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
					monster {
						url
					}
				}
				sektioner(orderBy: index_ASC) {
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
					facebookFeed
					bakgrund
					karta {
						latitude
						longitude
					}
					partners {
						url
					}
					sektionid
				}
				sidfot(where: { id: "cl4302qsrpu6f0bugo162kvmm" }) {
					kontaktuppgifter {
						html
					}
				}
			}
		`,
	});
	

	return {
		props: {
			introduction: data.introduction,
			sektioner: data.sektioner,
			sidfot: data.sidfot.kontaktuppgifter.html,
		},
	};
}
