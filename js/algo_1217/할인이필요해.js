const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [N, M, S] = input[0].split(' ').map(BigInt);

const percent = (S * (M + 1n) * (100n - N)) / 100n;
const plus = S * M;

console.log(percent < plus ? percent.toString() : plus.toString());