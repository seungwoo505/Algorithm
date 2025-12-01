const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [C, N] = input[0].split(' ').map(Number);

const promotion = Array.from({ length : N}, (_, i) => input[i + 1].split(" ").map(Number));
const maxP = Math.max(...promotion.map(([_, p]) => p));
const LIMIT = C + maxP;

const dp = Array.from({ length : LIMIT }, () => Number.MAX_VALUE);
dp[0] = 0;

for(let d = 1; d < LIMIT; d++){
    for(const [cost, p] of promotion){
        if(d - p >= 0)dp[d] = Math.min(dp[d], dp[d - p] + cost);
    }
}

console.log(maxP);
console.log(Math.min(...dp.slice(C)));