const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);

const library = Array.from({ length : 32 }, () => 0);

for(let n = 1; n <= N; n++){
    [S, E] = input[n].split(" ").map(Number);

    library[S] += 1;
    library[E] -= 1;
}

const K = input[N + 1];

let cur = 0;
let max = 0;
for(let d = 1; d <= 31; d++){
    cur += library[d];
    max = Math.max(max, cur);
}

console.log(max <= K ? 1 : 0);