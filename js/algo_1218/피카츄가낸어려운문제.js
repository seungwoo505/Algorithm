const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);

console.log(N * N * K);