const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');
let i = 0;

const [N, M] = input[i++].split(' ').map(Number);

const answer = [];
const poket = [""];
const nPoket = [];

for(let n = 1; n <= N; n++){
    const p = input[i++];
    poket.push(p);
    nPoket[p] = n;
}

for(let m = 0; m < M; m++){
    const p = input[i++];
    answer.push(Number(p) >= 0 ? poket[Number(p)] : nPoket[p]);
}

console.log(answer.join("\n"));