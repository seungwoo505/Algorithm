const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [N, M, V] = input[0].split(" ").map(Number);
const g = Array.from({ length : N + 1 }, () => []);

for(let m = 1; m <= M; m++){
    const [S, E] = input[m].split(" ").map(Number);
    g[S].push(E);
    g[E].push(S);
}

for(let n = 1; n <= N; n++){
    g[n].sort((a, b) => a - b);
}

const visible = Array.from({ length : N + 1}, (_, i) => false);
const ans = [];
const DFS = (now) => {
    if(visible[now]) return;
    
    visible[now] = true;
    ans.push(now);
    for(const n of g[now]){
        if(!visible[n]) DFS(n)
    }
}

const BFS = () => {
    const visible = Array.from({ length : N + 1}, () => false);

    const queue = [V];
    const ans = [];
    let q = 0;

    while(q < queue.length){
        const now = queue[q++];

        if(visible[now]) continue;
        visible[now] = true;
        ans.push(now);

        for(const n of g[now]){
            if(!visible[n]) queue.push(n);
        }

    }

    return ans.join(" ");
}

DFS(V);

console.log(`${ans.join(" ")}\n${BFS()}`);