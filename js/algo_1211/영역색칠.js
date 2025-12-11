const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const draw = Array.from({ length : N }, (_, i) => input[i + 1].split(" ").map(Number));

let count = 0;

for(let n = 0; n < N; n++){
    let one = 0;
    let two = 0;
    let prev = 0;

    for(let m = 0; m < M; m++){
        const now = draw[n][m];

        if(now === 0){
            if(prev !== 0){
                count += Math.min(one, two) + 1;
                prev = 0;
                one = 0;
                two = 0;
            }
        }else{
            if(now !== prev){
                if(now === 1)one++;
                else two++;
                prev = now;
            }
        }
    }

    if(prev !== 0) count += Math.min(one, two) + 1;
}

console.log(count);