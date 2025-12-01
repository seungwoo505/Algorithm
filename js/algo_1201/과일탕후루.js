const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);

const S = input[1].split(" ").map(Number);
const veg = [];

for(let s of S){
    if(veg[s] === undefined) veg[s] = 0;
    veg[s]++;
}

veg.sort((a, b) => b - a);

console.log(veg[0] + (veg[1] === undefined ? 0 : veg[1]));