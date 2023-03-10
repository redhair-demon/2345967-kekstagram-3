function getRandInt(from, to) {
  return Math.floor(Math.min(from) + Math.random() * Math.abs(to-from));
}

getRandInt(31, 209);

function isStringFits(string, maxLength) {
  return string.length <= maxLength;
}

isStringFits('helloworld', 9);
