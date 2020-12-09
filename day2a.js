const fs = require('fs');

const input = fs.readFileSync('./day2.input.txt', 'utf8').split('\n');
// console.log(input);

const checkValidityA = (str) => {
  const bits = str.split(' ');
  console.log('input string: ', str);
  const targetLetter = bits[1].replace(':', '');
  console.log('target letter: ', targetLetter);
  const minOcc = bits[0].split('-')[0];
  const maxOcc = bits[0].split('-')[1];
  console.log('minOcc', minOcc);
  console.log('maxOcc', maxOcc);
  const regex = new RegExp(targetLetter, 'g');
  const occurancesCount = (bits[2].match(regex) || []).length;
  console.log('occurancesCount', occurancesCount);
  return occurancesCount >= minOcc && occurancesCount <= maxOcc;
};

const validA = input.filter((x) => checkValidityA(x));
console.log('validA.length', validA.length);

module.exports = checkValidityA;
