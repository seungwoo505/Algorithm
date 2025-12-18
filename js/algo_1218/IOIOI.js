const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);
const M = Number(input[1]);
const S = input[2].split("");

const check = (start) => {
    if(!(S[start - 1] === 'I' && S[start] === 'O' && S[start + 1] === 'I')) return false;
    return true;
}

let count = 0;
let cnt = 0;

for(let m = 1; m < M; m++){
    if(check(m)){
        if(++cnt >= N) count++;
        m++;
    }else{
        cnt = 0;
    }
}

console.log(count);