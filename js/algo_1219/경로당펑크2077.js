const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);
const S = input[1];

const last = S[S.length - 1];

const check = "rsefaqtdwczxvg"; // 받침으로 올 수 있는 자음만 모아둠

console.log(check.includes(last) ? 1 : 0);