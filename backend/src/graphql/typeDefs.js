import { gql } from 'apollo-server-express';
// import { GraphQLDateTime } from 'graphql-iso-date';

export const typeDefs = gql`

scalar ISODate

type Query {
    user: User

    books: [Book!]!
    book(id: ID!): Book
}

type User {
    id: ID!
    name: String!
    email: String!
    books: [Book!]
    createdAt: ISODate!
    updatedAt: ISODate!
}

input signupInput {
    name: String!
    email: String!
    password: String!
}

input loginInput {
    email: String!
    password: String!
}

type Token {
    token: String!
}

type Mutation {
    signup(input: signupInput): User
    login(input: loginInput): Token

    addBook(book: BookInput!): Book
    updateBook(id: ID!, book: UpdateBookInput): Book
    removeBook(id: ID!): Book
}

type Book {
    id: ID
    title: String!
    author: String!
    user: User!
    createdAt: ISODate!
    updatedAt: ISODate!
}

input BookInput {
    title: String!
    author: String!
}

input UpdateBookInput {
    title: String
    author: String
}

`