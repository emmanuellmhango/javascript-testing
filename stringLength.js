function stringLength(string) {
  if (string < 1 && string > 10) {
    throw new Error('Error: Invalid string length');
  }
  return string.length;
}

module.exports = stringLength;