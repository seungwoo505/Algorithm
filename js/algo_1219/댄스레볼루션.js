const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split(" ").map(Number);

let now = [0, 0];
let str = 0;

const check = (next) => {
    const nextLeft = now[0] === 0 ? 2 : now[0] === next ? 1 : Math.abs(next - now[0]) === 2 ? 4 : 3;
    const nextRight = now[1] === 0 ? 2 : now[1] === next ? 1 : Math.abs(next - now[1]) === 2 ? 4 : 3;

    if(nextLeft <= nextRight){
        str += nextLeft;
        now[0] = next;
    }else{
        str += nextRight;
        now[1] = next;
    }
}

for(const next of input){
    if(next === 0) break;

    check(next);
}

console.log(str);