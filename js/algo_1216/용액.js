const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);

const sol = input[1].split(" ").map(Number);
let l = 0, r = N - 1;

let bestAbs = Infinity;
let ans1 = 0, ans2 = 0;

while(l < r){
    const sum = sol[l] + sol[r];
    const abs = Math.abs(sum);

    if(abs < bestAbs){
        bestAbs = abs;
        ans1 = sol[l];
        ans2 = sol[r];
        if(bestAbs === 0) break;
    }

    if(sum < 0) l++;
    else r--;
}

console.log(ans1, ans2);