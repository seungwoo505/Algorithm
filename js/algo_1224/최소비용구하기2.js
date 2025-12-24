const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);
const M = Number(input[1]);

const city = Array.from({ length : N + 1}, () => []);
const visible = Array.from({ length : N + 1}, () => false);

for(let m = 2; m < M + 2; m++){
    const [S, E, cost] = input[m].split(" ").map(Number);

    city[S].push([E, cost]);
}

const [start, end] = input[M + 2].split(" ").map(Number);

const queue = [[start, 0]];
let q = 0;

while(q < queue.length){
    const [now, cost] = queue[q++];

    if(visible[now]) continue;
    visible[now] = true;

    for(const [E, C] of city[now]){
        if(!visible[E]) queue.push([now, cost])
    }
}