module.exports = class {
  constructor(id) {
    this.id = id;
  }

  name() {
    return `User-${this.id}`;
  }
};
