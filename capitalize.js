function capitaliseCase(string) {
  return string.charCodeAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitaliseCase;