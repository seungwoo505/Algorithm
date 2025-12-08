const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);

const M = Number(input[2]);
const B = input[3].split(" ").map(Number);

B.sort((a, b) => a - b);

const comm = [];

const answer = [];

for(const a of A){
    for(const b of B){
        if(a === b) {
            comm.push(a);
            break;
        }else if(a < b) break;
    }
}

const sequence = (seq, start, len) =>{
    if(seq.length === len){
        answer.push(seq);
        return ;
    }

    for(let c = start; c < comm.length; c++){
        sequence([...seq, comm[c]], c + 1, len);
    }
}

for(let i = 1; i <= comm.length; i++){
    sequence([], 0, i);
}

answer.sort((a, b) =>{
    const max = Math.max(a.length, b.length);

    for(let m = 0; m < max; m++){
        if(a[m] !== b[m]) return a[m] - b[m];
    }
})

const ans = answer[answer.length - 1];

console.log(ans.length + "\n" + ans.join(" "));