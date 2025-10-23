const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const answer = [];

const seq = input[1].split(' ').map(Number);

const dfs = (s, d) => {
    if(d === M){
        answer.push(s.join(" "));
        return;
    }

    for(let q of seq){
        if(!s.includes(q)) dfs([...s, q], d + 1);
    }
}

seq.sort((a, b) => a - b);

for(let s of seq){
    dfs([s], 1);
}

console.log(answer.join("\n"));