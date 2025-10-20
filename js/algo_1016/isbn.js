const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('');
const star = input.indexOf('*');

let sum = 0;
for(let i = 0; i < 13; i++){
    if( i === star) continue;
    const d = Number(input[i]);
    const w = (i % 2 === 0) ? 1 : 3;
    sum += d * w;
}

sum %= 10;
const need = (10 - sum) % 10;
const inv = (star % 2 === 0) ? 1 : 7;
const x = (need * inv) % 10;
console.log(x);