const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);
const count = 0;

for(let n = 1; n <= N; n++){
    const [a, b, c, d] = input[n].split(" ").map(Number);

    const sum = a + b + c + d;
    console.log(`${n} : ${sum}`);

    if(sum === 0) count++;
}

console.log(count);