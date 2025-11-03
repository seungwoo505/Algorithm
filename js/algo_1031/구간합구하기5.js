const fs = require('fs');
const a = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let k = 0;

const N = a[k++], M = a[k++];
const ps = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    const v = a[k++];
    ps[i][j] = v + ps[i - 1][j] + ps[i][j - 1] - ps[i - 1][j - 1];
  }
}

const out = [];
for (let q = 0; q < M; q++) {
  const x1 = a[k++], y1 = a[k++], x2 = a[k++], y2 = a[k++];
  out.push(ps[x2][y2] - ps[x1 - 1][y2] - ps[x2][y1 - 1] + ps[x1 - 1][y1 - 1]);
}
console.log(out.join('\n'));