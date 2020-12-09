const fs = require('fs');

const input = fs.readFileSync('./day2.input.txt', 'utf8').split('\n');
// console.log(input);

const checkValidityB = (str) => {
  console.log('input string: ', str);
  const bits = str.split(' ');
  const targetLetter = bits[1].replace(':', '');
  console.log('target letter: ', targetLetter);
  const pos1 = +bits[0].split('-')[0] - 1;
  const pos2 = +bits[0].split('-')[1] - 1;
  console.log('pos1', pos1);
  console.log('pos2', pos2);
  const letterAtPos1 = bits[2].charAt(pos1);
  const letterAtPos2 = bits[2].charAt(pos2);
  console.log('letterAtPos1', letterAtPos1);
  console.log('letterAtPos2', letterAtPos2);
  return (letterAtPos1 === targetLetter && letterAtPos2 !== targetLetter)
    || (letterAtPos1 !== targetLetter && letterAtPos2 === targetLetter);
};

const validB = input.filter((x) => checkValidityB(x));
console.log('validB.length', validB.length);

module.exports = checkValidityB;
