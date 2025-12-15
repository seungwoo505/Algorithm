const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

let index = 0;
const T = Number(input[index++]);
const answer = [];

for(let t = 1; t <= T; t++){
    const one = input[index++].split(",");
    const two = input[index++].split("|");

    const map = [];
    let min = Number.MAX_VALUE;

    for(const o of one){
        const [name, value] = o.split(":");
        map[name] = Number(value);
    }

    for(const group of two){
        let groupMax = 0;
        for(const need of group.split("&")){
            groupMax = Math.max(groupMax, map[need]);
        }

        min = Math.min(min, groupMax);
    }

    answer.push(min);
}

console.log(answer.join("\n"));