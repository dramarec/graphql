import { getBooks, getBookById, saveBook, removeBook, updateBook } from './model';

export const resolvers = {
    Query: {
        books: () => getBooks()
    }
};
