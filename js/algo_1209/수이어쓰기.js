const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();

const N = Number(input);
const len = input.length;

let answer = 0;
let start = 1;

for (let d = 1; d < len; d++) {
  answer += 9 * start * d;
  start *= 10;
}

answer += (N - start + 1) * len;

console.log(answer.toString());