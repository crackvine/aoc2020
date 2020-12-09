const fs = require('fs');

const input = fs.readFileSync('day4.input.txt', 'utf8');
// console.log(input);

const records = input.split('\n\n');
// console.log(records);

const isDocumentValid = (doc) => {
  const fields = doc.replace(/\n/g, ' ').split(' ');
  console.log('fields', fields);
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
  ) return true;
  return false;
};

const totalValidRecords = records.reduce((acc, x) => (isDocumentValid(x) ? acc + 1 : acc), 0);
console.log(totalValidRecords);

module.exports = isDocumentValid;
