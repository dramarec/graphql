// Core
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

// Components
import { Pet } from "./bus/pet";

// Other
import { client } from "./init/client";

// import ApolloClient from "apollo-boost";
// // GraphQL Server
// const client = new ApolloClient({
//     uri: "https://funded-pet-library.moonhighway.com/",
// });

export const App = () => {
    return (
        <ApolloProvider client={client}>
            <h1>Hello</h1>
            <Pet />
        </ApolloProvider>
    );
};
