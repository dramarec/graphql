import { Book } from "./model";

export const resolvers = {
    Query: {
        books: () => Book.find(),
        book: (_, { id }) => Book.findById(id),
    },
    Mutation: {
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
};
