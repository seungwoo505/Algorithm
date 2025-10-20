const fs = require('fs');
const [P, Q] = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split(' ').map(Number);

console.log(`${Q - P} ${Q}`);