const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const N = input[0];
const K = input[1];

const MAX = 100000;
const dist = new Int32Array(MAX + 1);
dist.fill(-1);

const ways = new Int32Array(MAX + 1);

const q = new Int32Array(MAX + 1);
let head = 0, tail = 0;

dist[N] = 0;
ways[N] = 1;
q[tail++] = N;

while (head < tail) {
  const x = q[head++];

  if (dist[K] !== -1 && dist[x] > dist[K]) break;

  const nx1 = x - 1;
  const nx2 = x + 1;
  const nx3 = x << 1;

  if (nx1 > 0) {
    if (dist[nx1] === -1) {
      dist[nx1] = dist[x] + 1;
      ways[nx1] = ways[x];
      q[tail++] = nx1;
    } else if (dist[nx1] === dist[x] + 1) {
      ways[nx1] += ways[x];
    }
  }

  if (nx2 <= MAX) {
    if (dist[nx2] === -1) {
      dist[nx2] = dist[x] + 1;
      ways[nx2] = ways[x];
      q[tail++] = nx2;
    } else if (dist[nx2] === dist[x] + 1) {
      ways[nx2] += ways[x];
    }
  }

  if (nx3 <= MAX) {
    if (dist[nx3] === -1) {
      dist[nx3] = dist[x] + 1;
      ways[nx3] = ways[x];
      q[tail++] = nx3;
    } else if (dist[nx3] === dist[x] + 1) {
      ways[nx3] += ways[x];
    }
  }
}

console.log(dist[K] + "\n" + ways[K]);