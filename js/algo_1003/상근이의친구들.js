const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

let n = 0;
let answer = "";

while(true){
    const [M, F] = input[n++].split(" ").map(Number);

    if(M === 0 && F === 0) break;

    answer += (M + F) + "\n";
}

console.log(answer.trim());