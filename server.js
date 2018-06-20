const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: String
    name: String
  }

  type Query {
    user(id: !String): User
  }
`);
class User {
  constructor(id) {
    this.id = id;
  }

  name() {
    return `${this.id}-'David'`;
  }
}

const rootValue = { user: ({ id }) => new User(id) };

const app = express();
app.use('/graphql', graphqlHTTP({ graphiql: true, rootValue, schema }));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
