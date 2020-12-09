const fs = require('fs');

const input = fs.readFileSync('./day6.input.txt', 'utf8');
// console.log(input);

// const inputArr = input.split('\n\n');
// console.log(inputArr);

const unanimousCorrect = (ans) => {
  const ansPerMember = ans.split('\n');
  console.log('ansPerMember', ansPerMember);
  // cycle through the first members asnwers to see if any are matched in all other's answers
  const member1ans = ansPerMember[0].split('');
  console.log(member1ans);
  const allCorrect = member1ans.reduce((acc, x) => {
    if (ansPerMember.every((y) => (y.split('').includes(x)))) {
      return [...acc, x];
    }
    return acc;
  }, []);
  console.log('unanimousCorrect', allCorrect);
  return allCorrect;
};

const unanimousCorrectResponseCount = (allInput) => {
  const inputArr = allInput.split('\n\n');
  return inputArr.reduce((acc, x) => acc + unanimousCorrect(x).length, 0);
};

// console.log(uniqueResponseCount(input));

module.exports = { unanimousCorrect, unanimousCorrectResponseCount };
