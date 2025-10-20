const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split(' ');

[H, I, A, R, C] = input;

console.log((H * I) - (A * R * C));