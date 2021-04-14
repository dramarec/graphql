// // Core
// import { ApolloClient } from 'apollo-client';
// import { createHttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { setContext } from 'apollo-link-context';

// // GraphQL Server
// const uri = 'https://funded-pet-library.moonhighway.com/';
// const httpLink = createHttpLink({
//   uri
// });

// // Auth
// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('token');

//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     }
//   }
// });

// // Cache initialization
// const cache = new InMemoryCache();

// export const client = new ApolloClient({
//   cache,
//   link: authLink.concat(httpLink)
// });

// // Core
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// GraphQL Server
// const uri = "https://lab.lectrum.io/graphql/task-manager/backend";
const uri = 'https://funded-pet-library.moonhighway.com/';
const link = createHttpLink({
    uri
});
// Cache initialization
const cache = new InMemoryCache();

export const client = new ApolloClient({
    cache,
    link
});
