const checkValidityA = require('./day2a.js');
const checkValidityB = require('./day2b.js');

test('1-3 a: abcde', () => {
  expect(checkValidityA('1-3 a: abcde')).toBe(true);
  expect(checkValidityB('1-3 a: abcde')).toBe(true);
});

test('1-3 b: cdefg', () => {
  expect(checkValidityA('1-3 b: cdefg')).toBe(false);
  expect(checkValidityB('1-3 b: cdefg')).toBe(false);
});

test('2-9 c: ccccccccc', () => {
  expect(checkValidityA('2-9 c: ccccccccc')).toBe(true);
  expect(checkValidityB('2-9 c: ccccccccc')).toBe(false);
});

test('2-8 c: ccccccccc', () => {
  expect(checkValidityA('2-8 c: ccccccccc')).toBe(false);
});

test('1-2 f: ffff', () => {
  expect(checkValidityA('1-2 f: ffff')).toBe(false);
  expect(checkValidityB('1-2 f: ffff')).toBe(false);
});

test('1-2 f: gfff', () => {
  expect(checkValidityB('1-2 f: gfff')).toBe(true);
});
