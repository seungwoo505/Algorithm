const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const T = Number(input[0]);
const answer = Array.from({ length : T }, () => 0);

const sum = (t, n, c) => {
    if(t >= n){
        if(t === n) answer[c]++;
        return;
    }

    sum(t + 1, n, c);
    sum(t + 2, n, c);
    sum(t + 3, n, c);
}

for(let t = 1; t <= T; t++){
    sum(0, Number(input[t]), t - 1);
}

console.log(answer.join("\n"));