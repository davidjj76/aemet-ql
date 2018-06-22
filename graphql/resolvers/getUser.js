const User = require('../entities/User');
module.exports = ({ id }) => new User(id);
