class ArrayUtils {
  constructor() {
    throw new Error('ArrayUtils cannot be instantiated.');
  }

  static average(arr) {
    if (arr.length === 0) {
      throw new Error('Array cannot be empty.');
    }
    const sum = arr.reduce((acc, curr) => acc + curr);
    return sum / arr.length;
  }

  static max(arr) {
    if (arr.length === 0) {
      throw new Error('Array cannot be empty.');
    }
    return Math.max(...arr);
  }
}
