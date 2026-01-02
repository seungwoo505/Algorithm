const L = Number(require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim());

const dp = Array.from({ length : L + 1}, () => Number.MAX_SAFE_INTEGER);

for(let i = 1; i <= Math.min(5, L); i++){
    dp[i] = 1;
}

for(let l = 6; l <= L; l++){
    dp[l] = Math.min(dp[l - 5], dp[l - 4], dp[l - 3], dp[l - 2], dp[l - 1]) + 1;
}

console.log(dp[L]);