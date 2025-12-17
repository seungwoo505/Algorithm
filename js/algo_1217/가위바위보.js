const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');
const answer = [0, 0];

const R = Number(input[0]);

const sang = input[1].split("");

const N = Number(input[2]);

const you = [];

const victory = (s, y) => {
    // 가위
    if(s === "S") return y === "P" ? 2 : y === "S" ? 1 : 0;

    // 보
    else if(s === "P") return y === "R" ? 2 : y === "P" ? 1 : 0;

    // 바위
    else if(s === "R") return y === "S" ? 2 : y === "R" ? 1 : 0;
}

for(let n = 3; n < N + 3; n++){
    you.push(input[n].split(""));
}

for(const y of you){
    for(let r = 0; r < R; r++){
        answer[0] += victory(sang[r], y[r]);
    }
}

for(let j = 0; j < R; j++){
    let max = 0;
    for(const now of ["S", "P", "R"]){
        let score = 0;
        for(let i = 0; i < N; i++ ){
            score += victory(now, you[i][j]);
        }

        max = Math.max(max, score);
    }

    answer[1] += max;
}

console.log(answer.join("\n"));