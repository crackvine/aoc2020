const fs = require('fs');

const input = fs.readFileSync('./day3.input.txt', 'utf8').split('\n');
// console.log(input);

const hitTree = (pattern, pos) => {
  const len = pattern.length;
  // console.log('length', len);
  const normPos = pos % len;
  // console.log('normPos', normPos);
  const charHit = pattern.charAt(normPos);
  // console.log('charHit', charHit);
  return charHit === '#';
};

const totalTreesHit = (movementVector) => {
  const result = input.reduce((acc, line, ix) => {
    if (ix % movementVector[1] !== 0) { return acc; }
    // console.log('current line', line);
    const currentX = movementVector[0] * ix;
    // console.log('currentX', currentX);
    const hit = hitTree(line, currentX) ? 1 : 0;
    return acc + hit;
  }, 0);
  return result;
};

console.log('totalTreesHit', totalTreesHit([3, 1]));

const vectors = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

const res = vectors.reduce((acc, x) => acc * totalTreesHit(x), 1);

console.log(res);

module.exports = hitTree;
