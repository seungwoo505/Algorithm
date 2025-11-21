const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const graph = Array.from({ length : N + 1}, () => []);
const visible = Array.from({ length : N + 1}, () => false);
let count = 0;

for(let m = 1; m <= M; m++){
    const [u, v] = input[m].split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
}

for(let n = 1; n <= N; n++){
    if(visible[n]) continue;

    count++;
    const queue = [n];
    let q = 0;

    while(q < queue.length){
        const now = queue[q++];

        if(visible[now]) continue;
        visible[now] = true;

        for(const g of graph[now]){
            if(!visible[g]) queue.push(g);
        }
    }
}

console.log(count);