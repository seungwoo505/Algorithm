const [A, B, C] = require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim().split(' ').map(Number);
console.log(3 * B / A * C);