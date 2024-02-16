function choice(arr) {
  const randIndex = Math.floor(Math.random() * arr.length);

  return arr[randIndex];
}

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.species = 'felis catus';
  }

  static registerStray() {
    const names = [
      'Muffin',
      'Biscuit',
      'Sleepy',
      'Dodo',
      'Princess Butterface',
    ];
    const name = choice(names);
    return new Cat(name, 'unknown');
  }

  meow() {
    return `${this.name} says meow`;
  }

  static species = 'felis catus';
}
