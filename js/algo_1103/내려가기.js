const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);
const cost = input[1].split(" ").map(Number);
let [max1, max2, max3] = cost;
let [min1, min2, min3] = cost;

for(let n = 2; n <= N; n++){
    const next = input[n].split(" ").map(Number);
    const x1 = Math.max(max1, max2) + next[0]; const x2 = Math.max(max1, max2, max3) + next[1]; const x3 = Math.max(max2, max3) + next[2];
    const n1 = Math.min(min1, min2) + next[0]; const n2 = Math.min(min1, min2, min3) + next[1]; const n3 = Math.min(min2, min3) + next[2];

    max1 = x1; max2 = x2; max3 = x3;
    min1 = n1; min2 = n2; min3 = n3;
}

console.log(Math.max(max1, max2, max3), Math.min(min1, min2, min3));