const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);

const size = Array.from({ length : 5 }, () => 0);

let box = 0;

for(const n of input[1].split(" ").map(Number)){
    size[n]++;
}

box += size[4];
size[4] = 0;

box += size[3];

if(size[3] >= size[1]) size[1] = 0;
else size[1] -= size[3];
size[3] = 0;

box += Math.floor(size[2] / 2);
size[2] %= 2;

if(size[2] === 1){
    box += 1;
    size[2] = 0;
    size[1] = size[1] > 2 ? size[1] - 2 : 0;
}

if(size[1] > 0){
    box += Math.floor(size[1] / 4);
    size[1] %= 4;
    if(size[1] > 0){
        box++;
        size[1] = 0;
    }
}

console.log(box);