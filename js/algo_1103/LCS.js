const fs = require('fs');
let [A, B] = fs.readFileSync(0, 'utf8').trim().split('\n');

if (A.length > B.length) [A, B] = [B, A];

const n = A.length, m = B.length;

let prev = new Uint16Array(m + 1);

for (let i = 1; i <= n; i++) {
  const cur = new Uint16Array(m + 1);
  const ai = A.charCodeAt(i - 1);
  for (let j = 1; j <= m; j++) {
    if (ai === B.charCodeAt(j - 1)) cur[j] = prev[j - 1] + 1;
    else cur[j] = prev[j] > cur[j - 1] ? prev[j] : cur[j - 1];
  }
  prev = cur;
}

console.log(prev[m]);