const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);
const P = input[1].split(" ").map(Number);
P.sort((a, b) => a - b);

let time = 0;
let total = 0;

for(let p of P){
    time += p;
    total += time;
}

console.log(total);