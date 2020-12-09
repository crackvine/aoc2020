const isDocumentValid = require('./day4a.js');

test('sample 1 valid', () => {
  const sample1 = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm`;
  expect(isDocumentValid(sample1)).toBe(true);
});

test('sample 2 invalid', () => {
  const sample1 = `iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929`;
  expect(isDocumentValid(sample1)).toBe(false);
});

test('sample 3 valid', () => {
  const sample1 = `hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm`;
  expect(isDocumentValid(sample1)).toBe(true);
});

test('sample 4 invalid', () => {
  const sample1 = `hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`;
  expect(isDocumentValid(sample1)).toBe(false);
});