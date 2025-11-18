const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');
const [K, N] = input[0].split(" ").map(Number);
const num = [];

for(let k = 1; k <= K; k++){
    num.push(Number(input[k]));
}

let max = Math.max(...num);
let min = 0;

while(min <= max){
    let mid = Math.floor((max + min) / 2);

    let count = 0;
    for(let n of num){
        count += Math.floor(n / mid);
    }

    if(count >= N){
        min = mid + 1;
    }else{
        max = mid - 1;
    }
}

console.log(max);