const N = Number(require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim());
const dp = [1, 1];

for(let n = 2; n <= N; n++){
    dp.push((dp[n - 2] + dp[n - 1]) % 10007);
}

console.log(dp[N]);