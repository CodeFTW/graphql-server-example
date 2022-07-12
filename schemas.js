const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User]
  }

  type Mutation {
    addUser(user: UserInput!): User
  }

  type Address {
    street: String
    city: String
    state: String
  }

  type User {
    id: ID!
    # Auth Info
    name: String!
    email: String!
    authUID: String!
    imageURL: String
    role: String!
    # Store Info
    # stores: [Store]
    # Auth Provider
    provider: [String]
    # Profile Info
    jobTitle: String
    hireDate: String
    birthday: String
    #gender: Gender
    biu: String
    phone: String
    # Address
    address: Address
    # Timestamp
    createAt: String
    updateAt: String
  }

  input AddressInput {
    street: String
    city: String
    state: String
  }

  input UserInput {
    # Auth Info
    name: String!
    email: String!
    authUID: String!
    address: AddressInput
  }
`;

module.exports = { typeDefs };
