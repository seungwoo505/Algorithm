const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n').map(Number);
const N = input[0];
const answer = [];
const arr = [];

for(let n = 1; n <= N; n++){
    const x = input[n];

    if(x === 0){
        answer.push(arr.length === 0 ? 0 : arr.shift());
    }else{
        if(arr.length === 0) arr.push(x);
        else if(arr[0] > x) arr.unshift(x);
        else {
            arr.push(x);
            arr.sort((a, b) => a - b);
        }
    }
}

console.log(answer.join("\n"));