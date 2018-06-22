const requireDirectory = require('require-directory');
exports.schema = require('./schema');
exports.resolvers = requireDirectory(module, './resolvers');
