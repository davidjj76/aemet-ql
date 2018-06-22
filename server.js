const express = require('express');
const graphqlHTTP = require('express-graphql');

const { schema, resolvers } = require('./graphql');

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({ graphiql: true, rootValue: resolvers, schema }),
);

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
