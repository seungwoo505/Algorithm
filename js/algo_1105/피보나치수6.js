const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf8').toString().trim());
const MOD = 1000000007n;

let a = 0n, b = 1n;
for (const bit of n.toString(2)) {
  const t = (2n * b - a + MOD) % MOD;
  const c = (a * t) % MOD;
  const d = (a * a + b * b) % MOD;
  if (bit === '0') { a = c; b = d; } 
  else { a = d; b = (c + d) % MOD; }
}

console.log(a.toString());