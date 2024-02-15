// function getTriangleArea(a, b) {
//   return (a * b) / 2;
// }

// function getTriangleHypotenuse(a, b) {
//   return Math.sqrt(a ** 2 + b ** 2);
// }

let myTri = {
  a: 3,
  b: 4,
  getArea: function () {
    return (this.a + this.b) / 2;
  },
  getHypotenuse: function () {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  },
};

let myTri2 = {
  a: 2,
  b: 5,
  getArea: function () {
    return (this.a + this.b) / 2;
  },
  getHypotenuse: function () {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  },
};
