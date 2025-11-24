const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);
const answer = [0, 0];
const room = Array.from({ length : N }, (_, i) => input[i + 1].split(""));
const visible = Array.from({ length : N }, () => Array.from({ length : N}, () => false));

for(let i = 0; i < N; i++){
    for(let j = 1; j < N; j++){
        if(visible[i][j]) continue;
        if(room[i][j] === '.' && room[i][j - 1] === '.') {
            answer[0]++;
            visible[i][j - 1]= true;
            while(j < N && room[i][j] === '.') visible[i][j++] = true;
        }
    }
}

const visible2 = Array.from({ length : N }, () => Array.from({ length : N }, () => false));

for(let j = 0; j < N; j++){
    for(let i = 1; i < N; i++){
        if(visible2[i][j]) continue;
        if(room[i][j] === '.' && room[i - 1][j] === '.') {
            answer[1]++;
            visible2[i - 1][j]= true;
            while(i < N && room[i][j] === '.') visible2[i++][j] = true;
        }
    }
}

console.log(answer.join(" "));