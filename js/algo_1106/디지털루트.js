const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n').map(BigInt);
const answer = [];

for(let i of input){
    if(i === 0n) break;
    let N = i;
    while(N >= 10n){
        N = (N / 10n) + N % 10n;
    }

    answer.push(String(N));
}

console.log(answer.join("\n"));