const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

let c = 0;
const T = Number(input[c++]);
const answer = [];

for(let t = 1; t <= T; t++){
    const N = Number(input[c++]);
    const clothes = [];

    for(let n = 1; n <= N; n++){
        const [name, type] = input[c++].split(" ");

        if(clothes[type] === undefined) clothes[type] = [name];
        else clothes[type].push(name);
    }

    let count = 1;

    for(const t in clothes){
        count *= (clothes[t].length + 1);
    }

    answer.push(count - 1);
}

console.log(answer.join("\n"));