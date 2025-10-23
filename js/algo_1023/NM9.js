const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

// 첫 번째 줄: N(세로 크기), M(가로 수)
const [N, M] = input[0].split(' ').map(Number);

const seq = input[1].split(" ").map(Number).sort((a, b) => a - b);
const answer = [];
let count = 0;

const dfs = (s, i, q) => {
    if(q === M){
        const newS = s.join(" ");
        if(!answer.includes(newS)) answer.push(newS);
        return;
    }

    for(let n = 0; n < N; n++){
        if(!i.includes(n)) dfs([...s, seq[n]], [...i, n], q + 1);
    }
}

for(let n = 0; n < N; n++){
    dfs([seq[n]], [n], 1);
}

console.log(answer.join("\n"));