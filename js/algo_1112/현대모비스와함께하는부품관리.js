const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const answer = [];
let c = 0;
const T = Number(input[c++]);

for(let t = 1; t <= T; t++){
    answer.push(`Material Management ${t}`);

    const N = Number(input[c++]);
    const [A, B] = input[c++].split(' ').map(Number);

    for(let n = 0; n < N; n++){
        const [u, v] = input[c++].split(' ').map(Number);

        if(A === u && B === v){
            // 놀랍게도 아무일도 안일어난다.
        }
    }


    answer.push('Classification ---- End!');
}

console.log(answer.join("\n"));