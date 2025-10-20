const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [M, N] = input[0].split(' ').map(Number);

const box = [];
let idx = 1;
let need = 0;
const q = [];

for (let n = 0; n < N; n++) {
    const row = input[idx++].split(' ').map(Number);
    box[n] = row;
    for (let m = 0; m < M; m++) {
      if (row[m] !== -1) need++;
      if (row[m] === 1) q.push([n, m, 0]);
    }
}

const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

let head = 0;
let lastDay = 0;

while (head < q.length) {
  const [n, m, day] = q[head++];

  if (box[n][m] === -1) continue;

  box[n][m] = -1;
  need--;
  lastDay = day;

  for (const [dn, dm] of dirs) {
    const nn = n + dn, nm = m + dm;
    if (nn < 0 || nn >= N || nm < 0 || nm >= M) continue;

    if (box[nn][nm] === 0) {
      box[nn][nm] = 1;
      q.push([nn, nm, day + 1]);
    }
  }
}

console.log(need === 0 ? lastDay : -1);