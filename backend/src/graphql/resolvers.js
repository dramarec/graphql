import bcrypt from 'bcryptjs';
// import { GraphQLDateTime } from 'graphql-iso-date';

import { Book } from "../models/model";
import { User } from "../models/user";

export const resolvers = {
    Query: {
        books: () => Book.find(),
        book: (_, { id }) => Book.findById(id),
    },
    Mutation: {
        signup: async (_, { input }) => {
            try {
                const user = await User.findOne({ email: input.email });

                if (user) {
                    throw new Error('Email already in use');
                }
                const hashedPassword = await bcrypt.hash(input.password, 12);
                const newUser = new User({ ...input, password: hashedPassword });
                const result = await newUser.save();

                return result;

            } catch (error) {
                console.log(error)
                throw error
            }
        },
        addBook: async (_, { book }) => {
            try {
                const newBook = new Book({ ...book });
                const result = await newBook.save();
                return result;
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        updateBook: async (_, { id, book }) => {
            try {
                const result = await Book.findByIdAndUpdate(
                    id,
                    { ...book },
                    { new: true }
                );
                return result;
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        removeBook: async (_, { id }) => {
            try {
                const result = await Book.findByIdAndDelete(id);
                return result;
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
    },
    // ISODate: GraphQLDateTime
    // User: {
    //     createdAt: () => "2021-06-15T19:44:54.517Z"  // if  # createdAt: String!
    // }
};
