const [S, K, H] = require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim().split(' ').map(Number);
const min = Math.min(S, K, H);
console.log(S + K + H >= 100 ? "OK" : min === S ? "Soongsil" : min === K ? "Korea" : "Hanyang");