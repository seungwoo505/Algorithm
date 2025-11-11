const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');
const n = Number(input[0]);
const vote = [];

if(n === 0){
    console.log(0);
    process.exit(0);
}

for(let v = 1; v <= n; v++){
    vote.push(Number(input[v]));
}

vote.sort((a, b) => a - b);

const cut = Math.round(n * 0.15);
let lev = 0;

for(let i = cut; i < (n - cut); i++){
    lev += vote[i];
}

console.log(Math.round(lev / (n - (cut * 2))));