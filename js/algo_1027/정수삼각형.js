const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);

const tri = [];

for(let n = 1; n <= N; n++){
    tri.push(input[n].split(" ").map(Number));
}

for(let n = N - 2; n >= 0; n--){
    for(let i = 0; i < tri[n].length; i++){
        tri[n][i] += Math.max(tri[n + 1][i], tri[n + 1][i + 1]);
    }
}

console.log(tri[0][0]);