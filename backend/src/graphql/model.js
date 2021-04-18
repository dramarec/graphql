import mongoose from "mongoose";
const { Schema } = mongoose;

const contactSchema = new Schema(
    {
        title: {
            type: String,
        },
        author: {
            type: String,
        },
    },
    { versionKey: false, timestamps: true }
);

export const Book = mongoose.model("book", contactSchema);
