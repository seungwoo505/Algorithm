const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);

const color = [];

for(let n = 1; n <= N; n++){
    color.push(input[n].split(" ").map(Number));
}

let r = color[0][0];
let g = color[0][1];
let b = color[0][2];

for(let i = 1; i < N; i++){
    const [cr, cg, cb] = color[i];

    const nr = Math.min(g, b) + cr;
    const ng = Math.min(r, b) + cg;
    const nb = Math.min(r, g) + cb;

    r = nr;
    g = ng;
    b = nb;
}

console.log(Math.min(r, g, b));