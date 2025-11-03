const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let index = 0;
const N = +input[index++], M = +input[index++];

const bus = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < M; i++) {
  const [u, v, w] = input[index++].split(' ').map(Number);
  bus[u].push([v, w]);
}

for (let u = 1; u <= N; u++) bus[u].sort((a, b) => a[1] - b[1]);

const [start, end] = input[index++].split(' ').map(Number);

const INF = 1e18;
let answer = INF;

const dist = Array(N + 1).fill(INF);

const dfs = (now, cost) => {
  if (cost >= dist[now]) return;
  dist[now] = cost;

  if (now === end) {
    if (cost < answer) answer = cost;
    return;
  }

  for (const [to, w] of bus[now]) {
    const nc = cost + w;
    if (nc >= answer) continue;
    dfs(to, nc);
  }
};

dfs(start, 0);
console.log(answer === INF ? -1 : answer);