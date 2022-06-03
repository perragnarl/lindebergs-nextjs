import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://api-eu-central-1.graphcms.com/v2/cl3y3p0hy19uo01v0f1wyapth/master",
	cache: new InMemoryCache(),
});

export default client;
