const N = Number(require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim());
const dp = [1, 1, 3];

for(let n = 3; n <= N; n++){
    dp.push((2 * dp[n - 2] + dp[n - 1]) % 10007);
}

console.log(dp[N]);