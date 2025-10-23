const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const queue = [];
let count = 0;
let n = [N, 1];
queue.push(n);

while(count < queue.length){
    n = queue[count++];

    if(n[0] === M){
        console.log(n[1]);
        process.exit(0);
    }

    if(n[0] > M) continue;

    queue.push([n[0] * 2, n[1] + 1]);
    queue.push([n[0] * 10 + 1, n[1] + 1]);
}

console.log(-1);