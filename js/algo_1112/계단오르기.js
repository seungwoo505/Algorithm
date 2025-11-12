const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);
const stairs = [0];
const dp = Array.from({ length : N + 1}, () => 0);

for(let n = 1; n <= N; n++){
    stairs.push(Number(input[n]));
}

if(N >= 1) dp[1] = stairs[1];
if(N >= 2) dp[2] = stairs[1] + stairs[2];

for(let n = 3; n <= N; n++){
    dp[n] = Math.max(dp[n - 2] + stairs[n], dp[n - 3] + stairs[n - 1] + stairs[n]);
}

console.log(dp[N]);