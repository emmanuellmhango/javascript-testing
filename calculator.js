class Calculator {

  static add(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
      return a + b;
    if (a === null || b === null)
      return null;
    return false;
  }

  static subtract(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
      return a - b;
    if (a === null || b === null)
      return null;
    return false;
  }

  static multiply(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
      return a * b;
    if (a === null || b === null)
      return null;
    return false;
  }

  static divide(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
      return a / b;
    if (a === null || b === null)
      return null;
    if( a === 0 || b === 0)
      return Infinity;
    return false;
  }
}

module.exports = Calculator;