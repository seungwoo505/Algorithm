const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

let people = [];
const answer = [];

for(let n = 1; n <= N; n++){
    people[input[n]] = 1;
}

for(let m = N + 1; m <= N + M; m++){
    if(people[input[m]] === 1) answer.push(input[m]);
}

answer.sort();

console.log(answer.length + "\n" + answer.join("\n"));