const { exception } = require('console');
const fs = require('fs');

const input = fs.readFileSync('./day5.input.txt', 'utf8');
// console.log(input);

const binStep = (range, dir) => {
  if (range[0] === range[1]) return [range[0], range[1]];
  const half = (+range[1] - range[0] + 1) / 2;
  if (dir === 'F' || dir === 'L') {
    return [range[0], Math.ceil(range[0] + half - 1)];
  }
  if (dir === 'B' || dir === 'R') {
    return [Math.ceil(range[0] + half), range[1]];
  }
  return false;
};

const boardingPassParser = (pass) => {
  const rowCode = pass.substring(0, 7).split('');
  const colCode = pass.substring(7).split('');
  const row = rowCode.reduce((acc, x) => binStep(acc, x), [0, 127]);
  const col = colCode.reduce((acc, x) => binStep(acc, x), [0, 7]);
  const seatCode = (row[0] * 8) + col[0];
  if (row[0] !== row[1]) { throw new Error(`${rowCode} did not resolve to a single row`); }
  if (col[0] !== col[1]) { throw new Error(`${colCode} did not resolve to a single row`); }
  return { row: row[0], column: col[0], id: seatCode };
};

const seatCodeResults = input.split('\n').map((x) => {
  // console.log('x', x);
  const resObj = boardingPassParser(x);
  // console.log('resObj', resObj);
  return resObj.id;
});

// console.log(seatCodeResults);

for (let cod = 0; cod < 1000; cod++) {
  if (!seatCodeResults.includes(cod)) {
    console.log(cod);
  }
}

module.exports = { binStep, boardingPassParser };
