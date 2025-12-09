const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);

const M = Number(input[2]);
const B = input[3].split(" ").map(Number);

const num = Array.from({ length : 101 }, () => 0);
const comm = [];

for(const a of A){
    num[a]++;
}

for(const b of B){
    if(num[b] > 0){
        comm.push(b);
    }
}

const answer = [];
let now = 0;
const len = comm.length;

while(now < len){
    for(let i = now + 1; i < len; i++){
        if(comm[now] < comm[i]) now = i;
    }

    answer.push(comm[now++]);
}

console.log(answer.length + "\n" + answer.join(" "));