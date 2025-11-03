const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);

const arr = input[1].split(" ").map(Number);

const dp = Array.from({length : N}, () => 1);
let answer = 0;

for(let i = 0; i < N; i++){
    for(let j = 0; j < i; j++){
        if(arr[j] < arr[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    answer = Math.max(answer, dp[i]);
}

console.log(answer);