//Attempting to connect apollo and define the schema.
//Unsure if correctly done

const axios = require("axios");

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      books: async () => {
        try {
          const books = await axios.get()
          return books.data.map(({ title, author }) => ({
            title,
            author,
          }))
        } catch (error) {
          throw error
        }
      },
    },
  };


//  typeDefs: typeDefs,
//  resolvers: resolvers
server.listen().then(({}) => console.log(`Server ready at PORT`));