import { getBooks, getBookById, saveBook, removeBook, updateBook } from './model';

export const resolvers = {
    Query: {
        books: () => getBooks(),
        book: (_, { id }) => {
            const book = getBookById(id);
            console.log('book', book);
            return book;
        }
    },
    Mutation: {
        addBook: (_, { title, id, author }) => {
            return saveBook(title, id, author);
        }
    }
};
