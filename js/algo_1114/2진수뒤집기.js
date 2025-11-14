const fs = require('fs');
let N = Number(fs.readFileSync('/dev/stdin', 'utf8').toString().trim());
const two = [];
let pow = 1;

while(N > 0){
    two.unshift(N % 2);
    N = Math.floor(N / 2);
}

let answer = 0;
for(let i = 0; i < two.length; i++){
    answer += Math.pow(2, i) * two[i];
}

console.log(answer);