import dotenv from "dotenv";
dotenv.config();

import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";

import schema from "./graphql/schema.graphql";
import { resolvers } from "./graphql/resolvers";
// import { connectDatabase } from "./database";

const startServer = async () => {
    const app = express();

    const server = new ApolloServer({
        typeDefs: schema,
        resolvers,
    });

    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 3000;

    try {
        await mongoose.connect(process.env.DB_HOST, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (err) {
        console.log(err);
    }

    app.listen({ port: PORT }, () =>
        console.log(
            `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
        )
    );
};
startServer();
