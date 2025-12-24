const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);
const answer = [];

for(let n = 1; n <= N; n++){
    const [before, after] = input[n].split(" ");
    const bit = [0, 0];
    const len = before.length;

    for(let l = 0; l < len; l++){
        if(before[l] - after[l] === -1) bit[0]++;
        else if(before[l] - after[l] === 1) bit[1]++;
    }

    const min = Math.min(...bit);

    bit[0] -= min;
    bit[1] -= min;

    answer.push(min + bit[0] + bit[1]);
}

console.log(answer.join("\n"));