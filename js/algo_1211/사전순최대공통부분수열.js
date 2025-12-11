const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const arrA = [];

for(let n = 0; n < N; n++){
    arrA.push({val : A[n], idx : n});
}

const M = Number(input[2]);
const B = input[3].split(" ").map(Number);
const arrB = [];

for(let m = 0; m < M; m++){
    arrB.push({val : B[m], idx : m});
}

arrA.sort((a, b) => {
    return a.val === b.val ? a.idx - b.idx : b.val - a.val;
});

arrB.sort((a, b) => {
    return a.val === b.val ? a.idx - b.idx : b.val - a.val;
});

let i = 0;
let j = 0;

let lastA = -1;
let lastB = -1;

const answer = [];

while(i < N && j < M){
    const a = arrA[i];
    const b = arrB[j];

    if(a.val === b.val){
        if(a.idx <= lastA) i++;
        else if(b.idx <= lastB) j++;
        else{
            answer.push(a.val);
            lastA = a.idx; lastB = b.idx;
            i++; j++;
        }
    }else if(a.val > b.val) i++;
    else j++;
}

let out = '';
out += answer.length + '\n';
if (answer.length > 0) {
  out += answer.join(' ');
}
console.log(out.trim());