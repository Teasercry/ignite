import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p70by21ssm01xl5xsgeo3r/master',
    cache: new InMemoryCache()
})
