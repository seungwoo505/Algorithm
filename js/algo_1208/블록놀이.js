const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const N = data[0];
const K = data[1];
const A = data.slice(2);

let answer = N;

for (let i = 0; i < N; i++) {
  let change = 0;
  let possible = true;

  for (let j = 0; j < N; j++) {
    const ideal = A[i] + K * (j - i);
    if (ideal < 1) {
      possible = false;
      break;
    }

    if (ideal !== A[j]) change++;
  }

  if (possible && change < answer) {
    answer = change;
  }
}

console.log(answer);