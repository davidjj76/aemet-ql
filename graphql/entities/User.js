module.exports = class {
  constructor(id) {
    this._id = id;
  }

  name() {
    return `User-${this._id}`;
  }
};
