const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [N, M, K] = input[0].split(" ").map(Number);
const people = input[1].split("");
let virus = 0;
people.filter((e) => {
    if(e === "R"){
        virus++;
}});

for(let i = 0; i < N; i++){
    if(people[i] !== 'R') continue;

    for(let k = Math.max(0, i - K); k < Math.min(N, i + K + 1); k++){
        if(people[k] === 'r' || people[k] === 'R') continue;
        virus += 1;
        people[k] = 'r';
    }
}

console.log(virus <= M ? "Yes" : "No");