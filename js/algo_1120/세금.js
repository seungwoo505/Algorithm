const N = Number(require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim());

console.log(N * 0.78, N * 0.8 + N * 0.2 * 0.78);