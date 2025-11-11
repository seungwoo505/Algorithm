const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const M = Number(input[0]);
let set = [];
const answer = [];

for(let m = 1; m <= M; m++){
    const [comm, num] = input[m].split(" ");

    switch(comm){
        case "add":
            if(!set.includes(num)) set.push(num);
            break;
        case "remove":
            set = set.filter((s) => s !== num);
            break;
        case "check":
            answer.push(set.includes(num) ? 1 : 0);
            break;
        case "toggle":
            if(!set.includes(num)) set.push(num);
            else set = set.filter((s) => s !== num);
            break;
        case "all":
            set = Array.from({length : 20}, (_, i) => `${i + 1}`);
            break;
        case "empty":
            set = [];
            break;
    }
}

console.log(answer.join("\n"));