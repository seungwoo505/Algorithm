const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');
let answer = 0;

const [N, M] = input[0].split(' ').map(Number);

const people = Array.from({ length : N + 1 }, () => false);

const truth = input[1].split(" ").map(Number);

for(let i = 1; i <= truth[0]; i++){
    people[truth[i]] = true;
}

for(let m = 2; m < M + 2; m++){
    const party = input[m].split(" ").map(Number);

    let success = true;
    
    for(let i = 1; i <= party[0]; i++){
        if(people[party[i]]){
            for(let j = 1; j <= party[0]; j++){
                people[party[j]] = true;
            }
            success = false;
            break;
        }
    }

    if(success) answer++;
}

console.log(answer);