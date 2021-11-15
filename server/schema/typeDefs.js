const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }
    input Book_inp {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }
    type User {
        username: String
        email: String
        password: String
        savedBooks: String
        bookCount: [Int]
    }
    type Query {
        me: User
    }
    type Auth {
        token: ID!
        user: User
    }
    type Mutations {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: Book_inp!): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;