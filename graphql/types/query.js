module.exports = `
  type Query {
    getLocation(id: String!): Location
    getUser(id: String!): User
  }
`;
