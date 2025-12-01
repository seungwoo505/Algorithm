const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);
const M = Number(input[1]);
const S = input[2].split("");
let count = 0;

const p = ['I'];

for(let n = 1; n <= N; n++){
    p.push(...['O', 'I']);
}

let end = p.length;

for(let s = 0; s <= M - end; s++){
    let cnt = 0;
    for(let start = s; start < s + end; start++){
        if(S[start] !== p[cnt++]) break;
    }

    if(cnt === p.length) count++;
}

console.log(count);