const N = Number(require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim());
const dp = Array.from({ length : N + 1}, () => 0);

if(N >= 1) dp[1] = 1;
if(N >= 2) dp[2] = 2;

for(let n = 3; n <= N; n++){
    dp[n] = dp[n - 2] + dp[n - 1];
}

console.log(dp[N]);