module.exports = class {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  id() {
    return this._id;
  }

  name() {
    return this._name || `Location-${this._id}`;
  }
};
