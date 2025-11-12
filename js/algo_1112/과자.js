const [K, N, M] = require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim().split(' ').map(Number);
const balance = M - (K * N);
console.log(balance < 0 ? - balance : 0);