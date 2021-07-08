import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
} from '@apollo/client';
// import { setContext } from 'apollo-link-context';
// import { split } from 'apollo-link';
// import { WebSocketLink } from 'apollo-link-ws';
// import { getMainDefinition } from 'apollo-utilities';


const root = 'funded-pet-library.moonhighway.com/';

//! Create an http link: GraphQL Server
const link = createHttpLink({
    uri: `https://${root}`
}); 

// // Auth
// const authLink = setContext((_, { headers }) => {
//     const token = localStorage.getItem('token');
//     return {
//         headers: {
//             ...headers,
//             authorization: token ? `Bearer ${token}` : ''
//         }
//     };
// });

// const wrappedHttpLink = authLink.concat(httpLink);

// //! Create a WebSocket link:
// const wsLink = new WebSocketLink({
//     uri: `wss://${root}graphql`,
//     options: {
//         reconnect: true
//     }
// });

// const link = split(
//     ({ query }) => {
//         const definition = getMainDefinition(query);
//         return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
//     },
//     wsLink,
//     wrappedHttpLink
// );

// // Cache initialization
const cache = new InMemoryCache();

export const client = new ApolloClient({
    cache,
    link
});


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
