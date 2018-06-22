module.exports = class {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  name() {
    return this.name || `Location-${this.id}`;
  }
};
