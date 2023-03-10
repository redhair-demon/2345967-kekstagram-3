function getRandInt(from, to) {
  return Math.floor(Math.min(from) + Math.random() * Math.abs(to-from));
}

function isStringFits(string, max_length) {
  return string.length <= max_length;
}
