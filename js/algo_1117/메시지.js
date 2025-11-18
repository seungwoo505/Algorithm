const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

let count = 0;
let round = 1;
const answer = [];

while(1){
    const N = Number(input[count++]);
    const names = [];
    const message = [];

    if(N === 0) break;

    answer.push(`Group ${round++}`);

    for(let n = 0; n < N; n++){
        const m = input[count++].split(" ");
        names.push(m.shift());
        message.push(m);
    }

    const check = [];

    for(let i = 0; i < N; i++){
        let nasty = 0;
        for(nasty; nasty < N; nasty++){
            if(message[i][nasty] === 'N'){
                const t = i - nasty - 1;
                check.push(`${names[(t >= 0) ? t : N + t]} was nasty about ${names[i]}`);
            }
        }
    }

    answer.push(check.length > 0 ? check.join("\n") : "Nobody was nasty");

    answer.push('');
}

console.log(answer.join("\n").trim());