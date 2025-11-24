const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim();
const key = input[0].charCodeAt() ^ 'C'.charCodeAt();
const answer = [];

for(let i of input){
    answer.push(String.fromCharCode(i.charCodeAt() ^ key));
}

console.log(answer.join(""));