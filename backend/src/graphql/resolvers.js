import bcrypt from 'bcryptjs';
// import { GraphQLDateTime } from 'graphql-iso-date';
import { ApolloError } from 'apollo-server-express'
import jwt from 'jsonwebtoken'
import { Book } from "../models/model";
import { User } from "../models/user";

export const resolvers = {
    Query: {
        books: () => Book.find(),
        book: async (_, { id }) => {
            try {
                const book = await Book.findById(id)

                if (!book) {
                    throw new Error(`We don't have book with id: ${id}`);
                }

                return book

            } catch (error) {
                throw new ApolloError(`Failed to query book: ${error}`);
            }
        },
        user: async (_, __, { email }) => {
            try {
                const user = await User.findOne({ email })

                if (!user) {
                    throw new Error('User not found!')
                }

                return user
            } catch (error) {
                throw new Error(`Failed to query user: ${error}`);
            }
        }
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
                throw new Error(`Failed to mutation signup: ${error}`);
            }
        },
        login: async (_, { input }) => {
            try {
                const user = await User.findOne({ email: input.email });
                console.log("🔥🚀 ===> login: ===> user", user);

                if (!user) {
                    throw new Error('User not found');
                }
                const isPasswordValid = await bcrypt.compare(input.password, user.password);

                if (!isPasswordValid) {
                    throw new Error('Incorrect Password');
                }

                const secret = process.env.JWT_SECRET_KEY || 'mysecretkey';
                const token = jwt.sign({ email: user.email }, secret, { expiresIn: '30d' });

                return {
                    token,
                    user
                };

            } catch (error) {
                throw new Error(`Failed to mutation login: ${error}`);
            }
        },
        addBook: async (_, { book }, { email }) => {
            try {
                const user = await User.findOne({ email });

                const newBook = new Book({ ...book, user: user.id });
                const result = await newBook.save();

                user.books.push(result.id);
                await user.save();

                return result;
            } catch (error) {
                throw new Error(`Failed to mutation addBook: ${error}`);
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
                throw new Error(`Failed to mutation updateBook: ${error}`);
            }
        },
        removeBook: async (_, { id }) => {
            try {
                const result = await Book.findByIdAndDelete(id);
                return result;
            } catch (error) {
                throw new Error(`Failed to mutation removeBook: ${error}`);
            }
        },
    },
    User: {
        books: async ({ id }) => {
            try {
                return await Book.find({ user: id });
            } catch (error) {
                throw new Error(`Failed to User books: ${error}`);
            }
        }
    },
};
