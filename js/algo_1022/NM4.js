const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split(' ').map(Number);
const answer = [];

const dfs = (n, d) => {
    if(d === M){
        answer.push(n.join(" "));
        return;
    }

    for(let i = n[d - 1]; i <= N; i++){
        dfs([...n, i], d + 1);
    }
}

for(let n = 1; n <= N; n++){
    dfs([n], 1);
}

console.log(answer.join("\n"));