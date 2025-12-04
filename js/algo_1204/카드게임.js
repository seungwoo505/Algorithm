const fs = require('fs');
const A = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n').map(Number);
let total = 0;

for(let i of A ){
    total += i;
}

console.log(total);