const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [M, N, H] = input[0].split(' ').map(Number);

const box = Array.from({ length: H }, () => Array.from({ length: N }, () => Array(M)));
let idx = 1;
let need = 0;
const q = [];

for (let h = 0; h < H; h++) {
  for (let n = 0; n < N; n++) {
    const row = input[idx++].split(' ').map(Number);
    box[h][n] = row;
    for (let m = 0; m < M; m++) {
      if (row[m] !== -1) need++;
      if (row[m] === 1) q.push([h, n, m, 0]);
    }
  }
}

const dirs = [[1,0,0], [-1,0,0], [0,1,0], [0,-1,0], [0,0,1], [0,0,-1]];

let head = 0;
let lastDay = 0;

while (head < q.length) {
  const [h, n, m, day] = q[head++];

  if (box[h][n][m] === -1) continue;

  box[h][n][m] = -1;
  need--;
  lastDay = day;

  for (const [dh, dn, dm] of dirs) {
    const nh = h + dh, nn = n + dn, nm = m + dm;
    if (nh < 0 || nh >= H || nn < 0 || nn >= N || nm < 0 || nm >= M) continue;

    if (box[nh][nn][nm] === 0) {
      box[nh][nn][nm] = 1;
      q.push([nh, nn, nm, day + 1]);
    }
  }
}

console.log(need === 0 ? lastDay : -1);