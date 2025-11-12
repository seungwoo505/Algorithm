const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

let c = 0;
const answer = [];
const T = Number(input[c++]);

for(let t = 1; t <= T; t++){
    let s = Number(input[c++]);
    const N = Number(input[c++]);

    for(let n = 0; n < N; n++){
        const [q, p] = input[c++].split(" ").map(Number);
        s += q * p;
    }

    answer.push(s);
}

console.log(answer.join("\n"));