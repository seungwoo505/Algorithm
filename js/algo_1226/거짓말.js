const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const TP = [];
const T = input[1].split(" ").map(Number);

for(let t = 1; t <= T[0]; t++){
    TP.push(T[t]);
}

const partys = [];
const visible = Array.from({ length : M }, () => false);
const people = Array.from({ length : N + 1 }, () => []);

for(let m = 2; m < M + 2; m++){
    const party = [];

    const P = input[m].split(" ").map(Number);

    for(let p = 1; p <= P[0]; p++){
        party.push(P[p]);
        people[P[p]].push(m - 2);
    }

    partys.push(party);
}

const queue = [];
let q = 0;

for(const tp of TP){
    queue.push(tp);
}

let count = 0;

while(q < queue.length){
    const person = queue[q++];

    for(const party of people[person]){
        if(visible[party]) continue;
        visible[party] = true;
        count++;
        for(const p of partys[party]){
            if(!TP.includes(p)){
                TP.push(p);
                queue.push(p);
            }
        }
    }
}

console.log(M - count);