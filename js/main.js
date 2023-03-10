function getRandInt(from, to) {
  return Math.floor(Math.min(from) + Math.random() * Math.abs(to-from));
}

function isStringFits(string, maxLength) {
  return string.length <= maxLength;
}
