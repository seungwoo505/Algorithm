const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin', 'utf8').toString().trim());
const X = String(N).split("");
const len = X.length;

const num = [];

const visible = Array.from({ length : len }, () => false);

const mix = (n) => {
    if(n.length === len) num.push(Number(n));
    for(let i = 0; i < len; i++){
        if(visible[i]) continue;
        visible[i] = true;
        mix(n + X[i]);
        visible[i] = false;
    }
}

mix('');

num.sort((a, b) => a - b);

const set = [...new Set(num)];


for(let i = 0; i < set.length; i++){
    if(N === set[i]) {
        console.log( i === set.length - 1 ? 0 : set[i + 1]);
    }
}