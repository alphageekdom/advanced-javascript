class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.species = 'felis catus';
  }

  static meow() {
    // return 'MEOW MEOW MEOW!!!!';
    console.log('THIS IS: ', this);
  }

  static species = 'felis catus';
}
