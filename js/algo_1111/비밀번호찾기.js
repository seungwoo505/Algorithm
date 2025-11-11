const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const password = [];
const answer = [];

for(let n = 1; n <= N; n++){
    const [www, pass] = input[n].split(" ");
    password[www] = pass;
}

for(let m = N + 1; m <= N + M; m++){
    answer.push(password[input[m]]);
}

console.log(answer.join("\n"));