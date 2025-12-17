const fs = require('fs');
const { start } = require('repl');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);
const map = Array.from({ length : N }, (_, i) => input[i + 1].split(" ").map(Number));
const paper = Array.from({ length : N }, () => Array.from({ length : N }, () => false));
const answer = [0, 0, 0];

const check = (startI, endI, startJ, endJ) => {
    let num = map[startI][startJ];

    if(paper[startI][startJ]) return false;

    for(let i = startI; i < endI; i++){
        for(let j = startJ; j < endJ; j++){
                if(num !== map[i][j]) return false;
        }
    }

    for(let i = startI; i < endI; i++){
        for(let j = startJ; j < endJ; j++){
                paper[i][j] = true;
        }
    }

    answer[num + 1]++;
    return true;
}

check(0, N, 0, N);

let n = N / 3;

while(n >= 1){

    for(let i = 0; i < N; i += n){
        for(let j = 0; j < N; j += n){
            check(i, i + n, j, j + n);
        }
    }

    n /= 3;
}

console.log(answer.join("\n"));