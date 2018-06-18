const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const rootValue = { hello: () => 'Hello world!' };

const app = express();
app.use('/graphql', graphqlHTTP({ schema, rootValue, graphiql: true }));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
