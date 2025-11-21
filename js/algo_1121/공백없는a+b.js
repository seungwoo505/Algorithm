const input = require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim().split('');

const A = input.length === 2 ? Number(input[0]) : input[1] === '0' ? Number(input[0] + input[1]) : Number(input[0]);
const B = input.length === 2 ? Number(input[1]) : input.length === 3 ? input[1] === '0' ? Number(input[2]) : Number(input[1] + input[2]) : Number(input[2] + input[3]);

console.log(A + B);