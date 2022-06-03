import { gql } from "@apollo/client";
import client from "../apolloClient";
import Head from "next/head";
import Header from "../components/Header";
import Section from "../components/Section";

export default function Home({ introduction, puffar }: any) {
	return (
		<>
			<Head>
				<title>Lindebergs Blomsterhandel, blommor i Eslöv</title>
				<meta
					name="description"
					content="Lindebergs Blomsterhandel i Eslöv har ett brett utbud av olika sorters blommor. 0413-101 25 0413-137 93"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header introduction={introduction} />
			<main>
				<Section background title={puffar.titel}>
					hej
				</Section>
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
				puffar(where: { id: "cl3y73hcgfvt60dumsoo0c1i5" }) {
					titel
					puffar {
						... on Puff {
							bild {
								url
							}
							titel
							paragraf
						}
					}
				}
			}
		`,
	});

	return {
		props: {
			introduction: data.introduction,
			puffar: data.puffar,
		},
	};
}
