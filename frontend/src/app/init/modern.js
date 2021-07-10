import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";

// export const client = new ApolloClient({
//     cache: new InMemoryCache(),
//     uri: 'http://localhost:4000/graphql'
// });


// const URI = 'http://localhost:4000/graphql';
const URI = 'http://localhost:4000/graphql';

const httpLink = createHttpLink({
    uri: URI,
    // credentials: 'include' // https://www.apollographql.com/docs/react/networking/basic-http-networking/#including-credentials-in-requests

});

// const authLink = setContext((_, { headers }) => {
//     const token = localStorage.getItem('token');
//     return {
//         headers: {
//             ...headers,
//             authorization: token ? `Bearer ${token}` : ''
//         }
//     };
// });



export const client = new ApolloClient({
    // link: authLink.concat(httpLink),
    link: httpLink,
    cache: new InMemoryCache()
});
