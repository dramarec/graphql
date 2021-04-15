import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

// const express = require('express');
// const { ApolloServer, gql } = require('apollo-server-express');

const schema = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello client!'
    }
};

const app = express();
const PORT = 4000;

const server = new ApolloServer({
    // typeDefs,
    typeDefs: schema,
    resolvers
});

server.applyMiddleware({ app });

app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));
