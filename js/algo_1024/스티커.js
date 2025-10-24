const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

let idx = 0;
const T = Number(input[idx++]);
let out = [];

for (let tc = 0; tc < T; tc++) {
  const N = Number(input[idx++]);
  const up = new Array(N);
  const down = new Array(N);
  for (let i = 0; i < N; i++) up[i] = Number(input[idx++]);
  for (let i = 0; i < N; i++) down[i] = Number(input[idx++]);

  let dp0 = 0;
  let dp1 = up[0];
  let dp2 = down[0];

  for (let i = 1; i < N; i++) {
    const ndp0 = Math.max(dp0, dp1, dp2);
    const ndp1 = Math.max(dp0, dp2) + up[i];
    const ndp2 = Math.max(dp0, dp1) + down[i];
    dp0 = ndp0; dp1 = ndp1; dp2 = ndp2;
  }

  out.push(String(Math.max(dp0, dp1, dp2)));
}

console.log(out.join('\n'));