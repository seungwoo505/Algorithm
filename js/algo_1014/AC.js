const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const T = Number(input[0]);

let answer = "";

for(let t = 1; t <= T; t++){
    const p = input[1 + ((t - 1) * 3)].trim().split("");
    let n = Number(input[2 + ((t - 1) * 3)].trim());
    const body = input[3 + ((t - 1) * 3)].trim().slice(1, -1).trim();
    const x = body === "" ? [] : body.split(",").map(Number);
    let err = false;
    let reverse = false;

    for(const s of p){
        if(s === 'R'){ // 뒤집기
            reverse = !reverse;
        }else if(s === 'D' && n > 0){ // 버리기
            if(reverse) x.pop();
            else x.shift();
            n -= 1;
        }else {
            err = true;
            break;
        }
    }

    if(reverse) x.reverse();

    answer += err ? "error\n" : `[${x}]\n`;
}

console.log(answer.trim());