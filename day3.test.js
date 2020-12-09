const hitTree = require('./day3a.js');

const basePattern1 = '....#...............##...#...#.';

test('hit tree pattern1', () => {
  const pos1 = 4;
  const pos2 = 20;
  const pos3 = 51;
  const pos4 = 118;
  expect(hitTree(basePattern1, pos1)).toBe(true);
  expect(hitTree(basePattern1, pos2)).toBe(true);
  expect(hitTree(basePattern1, pos3)).toBe(true);
  expect(hitTree(basePattern1, pos4)).toBe(true);
});

test('hit open pattern1', () => {
  const pos1 = 2;
  const pos2 = 18;
  const pos3 = 71;
  const pos4 = 106;
  expect(hitTree(basePattern1, pos1)).toBe(false);
  expect(hitTree(basePattern1, pos2)).toBe(false);
  expect(hitTree(basePattern1, pos3)).toBe(false);
  expect(hitTree(basePattern1, pos4)).toBe(false);
});
