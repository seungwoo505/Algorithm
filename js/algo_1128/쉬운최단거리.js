const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const map = Array.from({ length : N }, (_, i) => input[i + 1].split(" ").map(Number));
const move = Array.from({ length : N }, () => Array.from({ length : M}, () => -1));

let target = [-1, -1];

for(let n = 0; n < N; n++){
    for(let m = 0; m < M; m++){
        if(map[n][m] === 2) target = [n, m];
        if(map[n][m] === 0) move[n][m] = 0;
    }
}

const d = [[-1, 0], [0, 1], [1, 0], [0, -1]];
const queue = [[...target, 0]];
let q = 0;

while(q < queue.length){
    const [y, x, distance] = queue[q++];

    if(move[y][x] !== -1) continue;

    move[y][x] = distance;

    for(const [dy, dx] of d){
        const [ddy, ddx] = [y + dy, x + dx];
        if(
            ddy >= 0 && ddy < N &&
            ddx >= 0 && ddx < M &&
            move[ddy][ddx] === -1
        ) queue.push([ddy, ddx, distance + 1]);
    }
}

const answer = [];

for(let m of move ){
    answer.push(m.join(" ").trim());
}

console.log(answer.join("\n").trim());