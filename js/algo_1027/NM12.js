const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const set = new Set(input[1].split(" ").map(Number).sort((a, b) => a - b));
const num = [...set];
const answer = [];
const S = num.length;

const dfs = (s, arr) => {
    if(arr.length === M){
        answer.push(arr.join(" "));
        return;
    }
    for(let n = s; n < S; n++){
        dfs(n, [...arr, num[n]]);
    }
}

for(let n = 0; n < S; n++){
    dfs(n, [num[n]]);
}

console.log(answer.join("\n").trim());