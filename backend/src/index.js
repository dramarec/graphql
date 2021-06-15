import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { ApolloServer } from "apollo-server-express";

import schema from "./graphql/schema.graphql";
import { resolvers } from "./graphql/resolvers";
import { connectDatabase } from "./database";

const startServer = async () => {
    const app = express();
    const db = await connectDatabase();

    const server = new ApolloServer({
        typeDefs: schema,
        resolvers,
        context: () => ({ db }),
    });

    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 3000;

    app.listen({ port: PORT }, () =>
        console.log(
            `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
        )
    );
};
startServer();
