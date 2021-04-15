//!
// const initialDB = [
//     {
//         title: 'Harry Potter',
//         author: 'J.K. Rowling',
//         id: 'ID-1'
//     },

//     {
//         title: 'Jurassic Park',
//         author: 'Michael Crichton',
//         id: 'ID-1'
//     }
// ];
// export const getBooks = () => initialDB;
// console.log('getBooks', getBooks());
//===============================

const { v4 } = require('uuid');
const initialDB = [
    [
        'ID-1',
        {
            title: 'Harry Potter',
            author: 'J.K. Rowling'
        }
    ],
    [
        'ID-2',
        {
            title: 'Jurassic Park',
            author: 'Michael Crichton'
        }
    ]
];

const booksDB = new Map(initialDB);

// =======  getBooks
export const getBooks = () => {
    const books = [];

    booksDB.forEach((value, key) => {
        // console.log('booksDB.forEach ===> key', key);
        // console.log('booksDB.forEach ===> value', value);
        const currentBook = {
            id: key,
            ...value
        };

        books.push(currentBook);
    });
    // console.log('booksDB.forEach ===> books', books);
    return books;
};
// console.log('getBooks ===> getBooks()', getBooks());

// ===
export const getBookById = id => {
    const book = booksDB.get(id);
    return { id, ...book };
};

export const saveBook = book => {
    const id = v4();
    booksDB.set(id, book);
    const savedBook = booksDB.get(id);

    return { id, ...savedBook };
};

export const removeBook = id => {
    const expectedBook = booksDB.get(id);
    booksDB.delete(id);

    return { id, ...expectedBook };
};
