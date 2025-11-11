const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const coin = [];

for(let n = 1; n <= N; n++){
    coin.unshift(Number(input[n]));
}

let won = M;
let now = 0;
let count = 0;

while(won > 0){
    const C = coin[now++];

    count += Math.floor(won / C);
    won = won % C;
}

console.log(count);