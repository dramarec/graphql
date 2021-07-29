import mongoose from "mongoose";
// const { Schema } = mongoose;

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    versionKey: false,
    timestamps: true
}
);

export const Book = mongoose.model("Book", bookSchema);
