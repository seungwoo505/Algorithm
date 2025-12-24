const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);

let procession = 0;

for(let n = 1; n <= N; n++){
    const x1 = input[n].split(" ").map(Number);
    const x2 = input[n + N].split(" ").map(Number);
    for(let i = 0; i < N; i++){
        procession += x1[i] | x2[i];
    }
}

console.log(procession)