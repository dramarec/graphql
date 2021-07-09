import {
    ApolloClient, //  apollo-client
    InMemoryCache, // apollo-cache-inmemory
    HttpLink, //!deprecated createHttpLink 'apollo-link-http'
    split, // apollo-link
} from '@apollo/client'; // apollo-boost
import {
    setContext
} from "@apollo/client/link/context"; // 'apollo-link-context';
import { WebSocketLink } from '@apollo/client/link/ws'; // apollo-link-ws
import { getMainDefinition } from '@apollo/client/utilities'; // apollo-utilities

const root = 'funded-pet-library.moonhighway.com/';

const httpLink = new HttpLink({
    // uri: `https://${root}/graphql`
    uri: `https://${root}`
});

//! Create a WebSocket link:
const wsLink = new WebSocketLink({
    // uri: `wss://${root}subscriptions`,
    uri: `wss://${root}graphql`,
    options: {
        reconnect: true
    }
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    };
});

const wrappedHttpLink = authLink.concat(httpLink);

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
// https://www.apollographql.com/docs/react/data/subscriptions/#gatsby-focus-wrapper

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    wrappedHttpLink
);


export const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
});


//////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////

// Core 1-2 
// import {
//     ApolloClient,
//     InMemoryCache,
// } from '@apollo/client';

// const uri = 'https://funded-pet-library.moonhighway.com/';
// const cache = new InMemoryCache();

// export const client = new ApolloClient({
//     uri,
//     cache
// });
