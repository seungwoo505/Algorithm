const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const T = Number(input[0]);
const tri = [0, 1, 1];
const answer = [];

for(let t = 1; t <= T; t++){
    const P = Number(input[t]);

    for(let p = tri.length; p <= P; p++){
        tri.push(tri[p - 3] + tri[p - 2]);
    }

    answer.push(tri[P]);
}

console.log(answer.join("\n"));