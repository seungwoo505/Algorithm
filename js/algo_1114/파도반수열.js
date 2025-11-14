const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const answer = [];
const T = Number(input[0]);
const P = [0, 1, 1, 1];
for(let t = 1; t <= T; t++){
    const N = Number(input[t]);

    for(let n = P.length; n <= N; n++){
        P.push(P[n - 3] + P[n - 2]);
    }

    answer.push(P[N]);
}

console.log(answer.join("\n"));