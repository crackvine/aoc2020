// const { uniqueResponses, uniqueResponseCount } = require('./day6a.js');
const { unanimousCorrect, unanimousCorrectResponseCount } = require('./day6b.js');

// test('abc gives 3', () => {
//   expect(uniqueResponses('abc')).toBe(3);
// });

// test('a\nb\nc gives 3', () => {
//   expect(uniqueResponses('a\nb\nc')).toBe(3);
// });

// test('ab\nac gives 3', () => {
//   expect(uniqueResponses('ab\nac')).toBe(3);
// });

// test('a\na\na\na gives 1', () => {
//   expect(uniqueResponses('a\na\na\na')).toBe(1);
// });

// test('b gives 1', () => {
//   expect(uniqueResponses('b')).toBe(1);
// });

// test(`sample input abc

// a
// b
// c

// ab
// ac

// a
// a
// a
// a

// b gives 11 `, () => {
//   expect(uniqueResponseCount(`abc

// a
// b
// c

// ab
// ac

// a
// a
// a
// a

// b`)).toBe(11);
// });

test('All correct sample 1', () => {
  expect(unanimousCorrect('ab\nac')).toMatchObject(['a']);
});

test('All correct sample 2', () => {
  expect(unanimousCorrect('abc')).toMatchObject(['a', 'b', 'c']);
});

test('All correct sample 3', () => {
  expect(unanimousCorrect('a\nb\nc')).toMatchObject([]);
});

test('All correct sample 4', () => {
  expect(unanimousCorrect('a\na\na\na')).toMatchObject(['a']);
});

test('All correct sample 4', () => {
  expect(unanimousCorrect('b')).toMatchObject(['b']);
});

test(`sample input abc

a
b
c

ab
ac

a
a
a
a

b gives 6 `, () => {
  expect(unanimousCorrectResponseCount(` abc

a
b
c

ab
ac

a
a
a
a

b`)).toBe(6);
});
