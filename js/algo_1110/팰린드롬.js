const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let p = 0;

const N = data[p++];
const a = new Int32Array(N + 1);
for (let i = 1; i <= N; i++) a[i] = data[p++];

const M = data[p++];

const dp = Array.from({ length: N + 1 }, () => new Uint8Array(N + 1));

for (let i = 1; i <= N; i++) dp[i][i] = 1;

for (let i = 1; i < N; i++) if (a[i] === a[i + 1]) dp[i][i + 1] = 1;

for (let len = 3; len <= N; len++) {
  for (let i = 1; i + len - 1 <= N; i++) {
    const j = i + len - 1;
    if (a[i] === a[j] && dp[i + 1][j - 1]) dp[i][j] = 1;
  }
}

const out = new Array(M);
for (let q = 0; q < M; q++) {
  const s = data[p++], e = data[p++];
  out[q] = dp[s][e] ? '1' : '0';
}
console.log(out.join('\n'));