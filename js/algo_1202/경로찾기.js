const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);

const graph = Array.from({ length : N }, (_, i) => Array.from({ length : N}, (_, j) => 0));
const move = Array.from({ length : N }, (_, i) => input[i + 1].split(" ").map(Number));

const queue = [];
let q = 0;

for(let i = 0; i < N; i++){
    for(let j = 0; j < N; j++){
        if(move[i][j] === 1) queue.push(j);
    }

    while(q < queue.length){
        const now = queue[q++];

        if(graph[i][now] === 1) continue;
        graph[i][now] = 1;

        for(let j = 0; j < N; j++){
            if(move[now][j] === 1 && graph[i][j] === 0) queue.push(j);
        }
    }
}

console.log(graph.map((g) => g.join(" ")).join("\n"));