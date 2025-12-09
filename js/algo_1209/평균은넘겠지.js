const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const C = Number(input[0]);

const answer = [];

for(let c = 1; c <= C; c++){
    const score = input[c].split(" ").map(Number);
    const N = score.shift();

    let avg = 0;

    for(const s of score){
        avg += s;
    }
    avg = avg / N;

    let count = 0;

    for(let s of score){
        if(avg < s) count++;
    }
    answer.push((Math.round(count / N * 100 * 1000) / 1000).toFixed(3));
}

console.log(answer.join("%\n") + "%");