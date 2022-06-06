import { gql } from "apollo-server"
const typeDefs=gql`
type Query {
    users: [User]
    user(id: ID!): User
    quotes: [Quote]
    iquote(by: ID!): [Quote]
}
type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
    password:String
    quotes: [Quote]
}
type Quote {
    by: ID
    name: String
}
type Mutation {
    signupUser(userNew:UserInput!): User
}
input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password:String!
}
`
export default typeDefs