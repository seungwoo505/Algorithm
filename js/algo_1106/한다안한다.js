const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);

const answer = [];

for(let n = 1; n <= N; n++){
    const doit = input[n].length / 2;
    answer.push(input[n][doit] === input[n][doit - 1] ? "Do-it" : "Do-it-Not");
}

console.log(answer.join("\n"));