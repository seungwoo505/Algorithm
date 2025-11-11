const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const T = Number(input[0]);

const fib = [[1, 0], [0, 1]];

for(let n = 2; n <= 40; n++){
    const z = fib[n - 2];
    const o = fib[n - 1];
    fib.push([z[0] + o[0], z[1] + o[1]]);
}

const answer = [];

for(let t = 1; t <= T; t++){
    answer.push(fib[Number(input[t])].join(" "));
}

console.log(answer.join("\n"));