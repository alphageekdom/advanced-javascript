class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get diameter() {
    return this._radius * 2;
  }
}
