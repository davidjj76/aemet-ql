const Location = require('../entities/Location');
module.exports = ({ location: { id, name } }) => new Location(id, name);
