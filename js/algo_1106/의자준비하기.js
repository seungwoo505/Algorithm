const fs = require('fs');
const [N, M, A, B] = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split(' ').map(Number);

const chair = (N * 3) - M;

console.log(chair <= 0 ? 0 : (chair * A + B));