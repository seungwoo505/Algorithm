const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);

const a = input[1].split(" ").map(Number);
const b = input[2].split(" ").map(Number);

let answer = 0;

for(let n = 0; n < N; n++){
    answer += Math.abs(a[n] - b[n]);
}

console.log(answer / 2);