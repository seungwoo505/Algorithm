const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let idx = 0;

const N = input[idx++];
const A = Array.from({ length: N }, () => Array(N).fill(0));
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    A[r][c] = input[idx++];
  }
}

const maxVal = N * N;
const seen = new Int32Array(maxVal + 1);
let stamp = 1;

let ans = 0;

for (let r1 = 0; r1 < N; r1++) {
  for (let c1 = 0; c1 < N; c1++) {
    for (let r2 = r1; r2 < N; r2++) {
      for (let c2 = c1; c2 < N; c2++) {
        const area = (r2 - r1 + 1) * (c2 - c1 + 1);

        let ok = true;

        for (let r = r1; r <= r2 && ok; r++) {
          for (let c = c1; c <= c2; c++) {
            const v = A[r][c];

            if (v < 1 || v > area || seen[v] === stamp) { ok = false; break; }

            seen[v] = stamp;
          }
        }

        if (ok) ans++;

        stamp++;
      }
    }
  }
}

console.log(ans.toString());