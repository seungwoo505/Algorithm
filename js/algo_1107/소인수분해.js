const fs = require('fs');
let N = Number(fs.readFileSync('/dev/stdin', 'utf8').toString().trim());
const answer = [];

while(N % 2 === 0){
    N /= 2;
    answer.push(2);
}

for(let i = 3; i * i <= N; i += 2){
    while(N % i === 0){
        N /= i;
        answer.push(i);
    }
}

if(N > 1) answer.push(N);

console.log(answer.join("\n"));