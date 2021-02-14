const { gql } = require('apollo-server-express')

const typeDefs = gql`
type Employee {
    name: String!
    department: String!
    age: Int
    joinedYear: Int
}
type Query {
    details: [Employee]!
}
type Mutation {
    newEmployee(name:String!,department:String!,age:Int,joinedYear:Int): Employee!
}
`;

module.exports = typeDefs