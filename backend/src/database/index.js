import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const user = process.env.DB_USER;
const userPassword = process.env.DB_USER_PASSWORD;
const cluster = process.env.DB_CLUSTER;

const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net`;

export const connectDatabase = async () => {
    const client = await MongoClient.connect(url, {
        useNewUrlParser: true,
        // poolSize: 5,
        useUnifiedTopology: true,
    });
    const db = client.db("main");

    return {
        listings: db.collection("test_listings"),
    };
};
