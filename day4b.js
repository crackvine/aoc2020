const fs = require('fs');

const input = fs.readFileSync('day4.input.txt', 'utf8');
// console.log(input);

const records = input.split('\n\n');
// console.log(records);

const hgtValid = (hgt) => {
  if (hgt.indexOf('cm') !== -1 && +hgt.replace('cm', '') >= 150 && +hgt.replace('cm', '') <= 193) {
    return true;
  }
  if (hgt.indexOf('in') !== -1 && +hgt.replace('in', '') >= 59 && +hgt.replace('in', '') <= 76) {
    return true;
  }
  return false;
};

const isDocumentValid = (doc) => {
  const fields = doc.replace(/\n/g, ' ').split(' ');
  // console.log('fields', fields);
  const docObject = fields.map((x) => x.split(':'))
    .reduce((acc, item) => ({
      ...acc,
      [item[0]]: item[1],
    }), {});
  console.log(docObject);
  if (
    docObject.hasOwnProperty('byr')
    && docObject.hasOwnProperty('iyr')
    && docObject.hasOwnProperty('eyr')
    && docObject.hasOwnProperty('hgt')
    && docObject.hasOwnProperty('hcl')
    && docObject.hasOwnProperty('ecl')
    && docObject.hasOwnProperty('pid')
  ) {
    // Check byr
    if (+docObject.byr > 2002 || +docObject.byr < 1920) { console.log(`failed on byr: ${docObject.byr}`); return false; }
    // Check iyr
    if (+docObject.iyr > 2020 || +docObject.iyr < 2010) { console.log(`failed on iyr: ${docObject.iyr}`); return false; }
    // Check eyr
    if (+docObject.eyr > 2030 || +docObject.eyr < 2020) { console.log(`failed on eyr: ${docObject.eyr}`); return false; }
    // Check hgt
    if (!hgtValid(docObject.hgt)) {
      console.log(`failed on hgt: ${docObject.hgt}`);
      return false;
    }
    // Check hcl
    if (!docObject.hcl.match(/#[0-9a-f]{6}/) || docObject.hcl.length !== 7) { console.log(`failed on hcl: ${docObject.hcl}`); return false; }
    // Check ecl
    if (!['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(docObject.ecl)) {
      console.log(`failed on ecl: ${docObject.ecl}`);
      return false;
    }
    // Check pid
    if (!docObject.pid.match(/[0-9]{9}/) || docObject.pid.length !== 9) { console.log(`failed on pid: ${docObject.pid}`); return false; }
    console.log('Document Valid');
    return true;
  }
  console.log('Failed on field count');
  return false;
};

const totalValidRecords = records.reduce((acc, x) => (isDocumentValid(x) ? acc + 1 : acc), 0);
console.log(totalValidRecords);

module.exports = isDocumentValid;