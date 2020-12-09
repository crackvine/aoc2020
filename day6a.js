const fs = require('fs');

const input = fs.readFileSync('./day6.input.txt', 'utf8');
// console.log(input);

// const inputArr = input.split('\n\n');
// console.log(inputArr);

const uniqueResponses = (ans) => {
  const allAns = ans.replace(/\n/g, '').split('');
  // console.log(allAns);
  const uniqueAns = [...new Set(allAns)];
  // console.log(uniqueAns);
  return uniqueAns.length;
};

const uniqueResponseCount = (allInput) => {
  const inputArr = allInput.split('\n\n');
  return inputArr.reduce((acc, x) => acc + uniqueResponses(x), 0);
};

console.log(uniqueResponseCount(input));

module.exports = { uniqueResponses, uniqueResponseCount };
