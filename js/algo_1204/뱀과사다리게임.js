const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const map = Array.from({ length : 101 }, (_, i) => i);
const visible = Array.from({ length : 101 }, () => false);


for(let i = 1; i <= N + M; i++){
    const [u, v] = input[i].split(' ').map(Number);
    map[u] = v;
}

const queue = [[1, 0]];
let q = 0;
let min = Number.MAX_VALUE;

while(q < queue.length){
    const [index, cost] = queue[q++];

    if(visible[index]) continue;

    if(index === 100){
        min = Math.min(min, cost);
        break;
    }

    visible[index] = true;

    for(let i = 1; i <= 6; i++){
        if(index + i <= 100 && !visible[index + i]){
            const next = map[index + i];
            queue.push([next, cost + 1]);
        }
    }
}

console.log(min);