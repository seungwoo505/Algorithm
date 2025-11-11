const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const S = input[0].split('');

const word = Array.from({length : 26}, () => -1);

for(let i = 0; i < S.length; i++){
    const index = S[i].charCodeAt() - 'a'.charCodeAt();

    if(word[index] === -1) word[index] = i;
}

console.log(word.join(" "));