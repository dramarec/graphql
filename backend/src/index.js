import dotenv from "dotenv";
dotenv.config();

import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";

// import schema from "./graphql/schema.graphql";
import { typeDefs } from './graphql/typeDefs'
import { resolvers } from "./graphql/resolvers";
import { verifyUser } from './helper/context'

const startServer = async () => {
    const app = express();

    const server = new ApolloServer({
        // typeDefs: schema,
        typeDefs,
        resolvers,
        context: async ({ req }) => {
            if (req) {
                await verifyUser(req)
            }
            // console.log("🔥🚀 ===> context: ===> req.email", req.email);
            return {
                email: req.email
            }
        },
        formatError: (error) => {
            return {
                message: error.message
            };
        }
    });

    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 4000;

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
