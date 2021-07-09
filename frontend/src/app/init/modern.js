// Core
// import { ApolloClient } from 'apollo-client';
// import { createHttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// GraphQL Server
const uri = `http://localhost:4000/graphql`;
const link = new HttpLink({
    uri,
    credentials: 'include' // https://www.apollographql.com/docs/react/networking/basic-http-networking/#including-credentials-in-requests

});

// Cache initialization
const cache = new InMemoryCache();

export const client = new ApolloClient({
    cache,
    link
});
