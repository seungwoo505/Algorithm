const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);

const map = Array.from({ length : N }, (_, i) => input[i + 1].split("").map(Number));

const d = [[1, 0], [0, 1], [-1, 0], [0, -1]];
const queue = [];
let q = 0;
const answer = [];


for(let i = 0; i < N; i++){
    for(let j = 0; j < N; j++){
        if(map[i][j] === 1){
            queue.push([i, j]);

            let count = 0;
            while(q < queue.length){
                const [y, x] = queue[q++];

                if(map[y][x] === 0) continue;
                map[y][x] = 0;
                count++;

                for(let [dy, dx] of d){
                    const [ddy, ddx] = [y + dy, x + dx];
                    if(ddy >= 0 && ddy < N &&
                        ddx >= 0 && ddx < N &&
                        map[ddy][ddx] === 1
                    ){
                        queue.push([ddy, ddx]);
                    }
                }
            }
            answer.push(count);
        }
    }
}

answer.sort((a, b) => a - b);
console.log(answer.length + "\n" + answer.join("\n"));