const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);

const paper = Array.from({ length : N }, (_, i) => input[i + 1].split(" ").map(Number));
let blue = 0;
let white = 0;
const visible = Array.from({ length : N}, () => Array.from({ length : N }, () => false));

const check = (y, x, end) => {
    let count = 0;
    let max = end ** 2;
    for(let i = y; i < y + end; i++){
        for(let j = x; j < x + end; j++){
            if(visible[i][j]) return false;
            if(paper[i][j] === 1) count++;
        }
    }

    return max === count ? 'blue' : count === 0 ? 'white' : false;
}

const per = (y, x, div) => {

    const c = check(y, x, div);

    if(c){
        if(c === 'blue') blue++;
        else white++;
        for(let i = y; i < y + div; i++){
            for(let j = x; j < x + div; j++){
                visible[i][j] = true;
            }
        }
    }

    if(div === 1) return;

    const d = div / 2;

    per(y, x, d);
    per(y, x + d, d);
    per(y + d, x + d, d);
    per(y + d, x, d);
}

per(0, 0, N);

console.log(`${white}\n${blue}`);