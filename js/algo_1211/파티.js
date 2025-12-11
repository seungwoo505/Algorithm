const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [N, M, X] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
const rev = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [S, E, T] = input[i].split(' ').map(Number);
  graph[S].push([E, T]);
  rev[E].push([S, T]);
}

const INF = 1e15;

function dijkstra(start, g) {
  const dist = Array(N + 1).fill(INF);
  dist[start] = 0;

  const pq = [];
  pq.push([0, start]);

  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    const [d, now] = pq.shift();

    if (d > dist[now]) continue;

    for (const [next, cost] of g[now]) {
      const nd = d + cost;
      if (nd < dist[next]) {
        dist[next] = nd;
        pq.push([nd, next]);
      }
    }
  }

  return dist;
}

const distFromX = dijkstra(X, graph);
const distToX = dijkstra(X, rev);

let maxTime = 0;
for (let i = 1; i <= N; i++) {
  const total = distFromX[i] + distToX[i];
  if (total > maxTime) maxTime = total;
}

console.log(maxTime.toString());