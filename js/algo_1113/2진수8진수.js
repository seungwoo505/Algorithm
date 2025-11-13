const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('').map(Number);

while(input.length % 3 !== 0){
    input.unshift(0);
}

const eight = [];

for(let i = 0; i < input.length; i += 3){
    eight.push(input[i] * 4 + input[i + 1] * 2 + input[i + 2] * 1);
}

console.log(eight.join(""));