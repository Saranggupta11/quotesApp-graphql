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
    quotes: [Quote]
}
type Quote {
    by: ID
    name: String
}
`
export default typeDefs