const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let answer = [];
let strics = new Set();

for(let n = 1; n <= N; n++){
    const stric = input[n].split(' ');
    let count = 0;
    let maxCount = 0;

    for(let d = 0; d < M; d++){
        if(stric[d] === '.') count++;
        else if(count >= 1){
            maxCount = Math.max(maxCount, count);
            count = 0;
        }
    }
    maxCount = Math.max(maxCount, count);
    
    answer.push(`${maxCount} ${stric[M]}`);
    strics.add(maxCount);
}

answer.unshift(strics.size);

console.log(answer.join("\n"));