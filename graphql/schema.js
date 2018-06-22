const { buildSchema } = require('graphql');
const requireDirectory = require('require-directory');

const types = requireDirectory(module, './types');
const schema = Object.values(types).join(' ');
module.exports = buildSchema(schema);
