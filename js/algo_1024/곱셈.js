const fs = require('fs');
const [A, B, C] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(BigInt);

let res = 1n, a = A % C, e = B;
while (e > 0n) {
  if (e & 1n) res = (res * a) % C;
  a = (a * a) % C;
  e >>= 1n;
}
console.log(String(res));