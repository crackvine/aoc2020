const { binStep, boardingPassParser } = require('./day5a.js');

test('row step [0, 127] F', () => {
  expect(binStep([0, 127], 'F')).toStrictEqual([0, 63]);
});

test('row step [0, 127] B', () => {
  expect(binStep([0, 127], 'B')).toStrictEqual([64, 127]);
});

test('row step [0, 63] B', () => {
  expect(binStep([0, 63], 'B')).toStrictEqual([32, 63]);
});

test('row step [32, 63] F', () => {
  expect(binStep([32, 63], 'F')).toStrictEqual([32, 47]);
});

test('row step [40, 47] B', () => {
  expect(binStep([40, 47], 'B')).toStrictEqual([44, 47]);
});

test('row step [44, 47] F', () => {
  expect(binStep([44, 47], 'F')).toStrictEqual([44, 45]);
});

test('row step [44, 45] F', () => {
  expect(binStep([44, 45], 'F')).toStrictEqual([44, 44]);
});

test('row step [44, 45] B', () => {
  expect(binStep([44, 45], 'B')).toStrictEqual([45, 45]);
});

test('row step [40, 47] R', () => {
  expect(binStep([40, 47], 'R')).toStrictEqual([44, 47]);
});

test('row step [32, 63] L', () => {
  expect(binStep([32, 63], 'L')).toStrictEqual([32, 47]);
});

test('sample 0 FBFBBFFRLR', () => {
  expect(boardingPassParser('FBFBBFFRLR')).toStrictEqual({ row: 44, column: 5, id: 357 });
});

test('sample 1 BFFFBBFRRR', () => {
  expect(boardingPassParser('BFFFBBFRRR')).toStrictEqual({ row: 70, column: 7, id: 567 });
});

test('sample 2 FFFBBBFRRR', () => {
  expect(boardingPassParser('FFFBBBFRRR')).toStrictEqual({ row: 14, column: 7, id: 119 });
});

test('sample 3 BBFFBBFRLL', () => {
  expect(boardingPassParser('BBFFBBFRLL')).toStrictEqual({ row: 102, column: 4, id: 820 });
});
