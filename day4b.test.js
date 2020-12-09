const isDocumentValid = require('./day4b.js');

test('valid samples',() => {
  const validSample1 = `pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f`;
  const validSample2 = `eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm`;
  const validSample3 = `hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022`;
  const validSample4 = `iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719`;
  expect(isDocumentValid(validSample1)).toBe(true);
  expect(isDocumentValid(validSample2)).toBe(true);
  expect(isDocumentValid(validSample3)).toBe(true);
  expect(isDocumentValid(validSample4)).toBe(true);
});

test('invalid samples',() => {
  const invalidSample1 = `eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926`;
  const invalidSample2 = `iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946`;
  const invalidSample3 = `hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277`;
  const invalidSample4 = `hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007`;

  expect(isDocumentValid(invalidSample1)).toBe(false);
  expect(isDocumentValid(invalidSample2)).toBe(false);
  expect(isDocumentValid(invalidSample3)).toBe(false);
  expect(isDocumentValid(invalidSample4)).toBe(false);
});
