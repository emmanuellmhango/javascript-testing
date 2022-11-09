const stringLength = require('./stringLength');
const reverseString = require('./reverseString');
const Calculator = require('./calculator');
const capitaliseCase = require('./capitalize');

describe('Addition', () => {
  it('should return the sum of two numbers', () => {
    //Arrange
    const a = 5;
    const b = 10;

    //Act
    const result = Calculator.add(a, b);

    //Assert
    expect(result).toBe(15);
  });

  it('should check that input are numbers', () => {
    //Arrange
    const a = '5';
    const b = '10';

    //Act
    const result = Calculator.add(a, b);

    //Assert
    expect(result).toMatch(/false/);
  });

  it('should check if input are nulls', () => {
    //Arrange
    const a = '5';
    const b = null;

    //Act
    const result = Calculator.add(a, b);

    //Assert
    expect(result).toBeNull();
  });
});

describe('Subtraction', () => {
  it('should return the difference of two numbers', () => {
    //Arrange
    const a = 10;
    const b = 5;

    //Act
    const result = Calculator.subtract(a, b);

    //Assert
    expect(result).toBe(5);
  });

  it('should check that input are numbers', () => {
    //Arrange
    const a = '10';
    const b = '5';

    //Act
    const result = Calculator.subtract(a, b);

    //Assert
    expect(result).toMatch(/false/);
  });

  it('should check if input are nulls', () => {
    //Arrange
    const a = '5';
    const b = null;

    //Act
    const result = Calculator.subtract(a, b);

    //Assert
    expect(result).toBeNull();
  });
});

describe('Multiplication', () => {
  it('should return the product of two numbers', () => {
    //Arrange
    const a = 5;
    const b = 10;

    //Act
    const result = Calculator.multiply(a, b);

    //Assert
    expect(result).toBe(50);
  });

  it('should check that input are numbers', () => {
    //Arrange
    const a = '5';
    const b = '10';

    //Act
    const result = Calculator.multiply(a, b);

    //Assert
    expect(result).toMatch(/false/);
  });

  it('should check if input are nulls', () => {
    //Arrange
    const a = '5';
    const b = null;

    //Act
    const result = Calculator.multiply(a, b);

    //Assert
    expect(result).toBeNull();
  });
});

describe('Division', () => {
  it('should return the dividend of two numbers', () => {
    //Arrange
    const a = 10;
    const b = 5;

    //Act
    const result = Calculator.divide(a, b);

    //Assert
    expect(result).toBe(2);
  });

  it('should check that input are numbers', () => {
    //Arrange
    const a = '5';
    const b = '10';

    //Act
    const result = Calculator.divide(a, b);

    //Assert
    expect(result).toMatch(/false/);
  });

  it('Divide by zero', () => {
    //Arrange
    const a = 5;
    const b = 0;

    //Act
    const result = Calculator.divide(a, b);

    //Assert
    expect(result).toBe(Infinity);
  });
});

it ('Reverse hello to be olleh', () => {
  //Arrange
  const string = 'hello';

  //Act
  const result = reverseString(string);

  //Assert
  expect(result).toMatch(/olleh/);
  
});

it('string length of hello to equal 5', () => {
  //Arrange
  const str = 'hello';

  //Act
  const result = stringLength(str);

  //Assert
  expect(result).toBe(5);
});

it('string length of Extravagant to be greater than 10', () => {
  //Arrange
  const str = 'Extravagant';

  //Act
  const result = stringLength(str);

  //Assert
  expect(result).toBeLessThan(10);
});

it('string length less than 1', () => {
  //Arrange
  const str = '';

  //Act
  const result = stringLength(str);

  //Assert
  expect(result).toBeGreaterThan(0);
});

it('Capitalize case', () => { 
  //Arrange
  const str = 'hello';

  //Act
  const result = capitaliseCase(str);

  //Assert
  expect(result).toMatch(/Hello/);
});
