const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const map = Array.from({ length : N }, (_, i) => input[i + 1].split(''));
const visible = Array.from({ length : N}, () => Array.from({ length : M }, () => false));

const dohyeon = [-1, -1];

for(let n = 0; n < N; n++){
    if(dohyeon[0] !== -1) break;
    for(let m = 0; m < M; m++){
        if(map[n][m] === 'I') {
            dohyeon[0] = n;
            dohyeon[1] = m;
            break;
        }
    }
}

const queue = [dohyeon];
let q = 0;
const d = [[1, 0], [0, 1], [0, -1], [-1, 0]];
let count = 0;

while(q < queue.length){
    const [y, x] = queue[q++];

    if(visible[y][x]) continue;
    visible[y][x] = true;
    if(map[y][x] === 'P') count++;

    for(let dd of d){
        const [dy, dx] = [y + dd[0], x + dd[1]];

        if(dy >= 0 && dy < N &&
            dx >= 0 && dx < M &&
            map[dy][dx] !== 'X' &&
            !visible[dy][dx]
        ){
            queue.push([dy, dx]);
        }
    }
}

console.log(count === 0 ? 'TT' : count);