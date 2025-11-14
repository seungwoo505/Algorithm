const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const num = [];
let sum = 0;

for(const n of input[1].split(" ").map(Number)){
    sum += n;
    num.push(sum);
}

const answer = [];

for(let m = 2; m <= M + 1; m++){
    const [S, E] = input[m].split(" ").map(Number);

    answer.push(num[E - 1] - (S >= 2 ? num[S - 2] : 0));
}

console.log(answer.join("\n"));