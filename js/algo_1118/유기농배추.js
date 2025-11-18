const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');
let c = 0;
const T = Number(input[c++]);
const d = [[-1, 0], [0, 1], [0, -1], [1, 0]];
const answer = [];

for(let t = 1; t <= T; t++){
    let [M, N, K] = input[c++].split(" ").map(Number);
    const field = Array.from({ length : N }, () => Array.from({ length : M }, () => 0));
    const queue = [];
    let count = 0;

    for(let k = 1; k <= K; k++){
        const [x, y] = input[c++].split(" ").map(Number);
        queue.push([y, x]);
        field[y][x] = 1;
    }

    for(const [y, x] of queue){
        if(field[y][x] === 0) continue; //이미 지렁이가 있을 수 있다면 투입할 필요 x
        count++;
        const worm = [[y, x]];
        let w = 0;

        while(w < worm.length){
            const [wy, wx] = worm[w++];
            
            if(field[wy][wx] === 0) continue;
            field[wy][wx] = 0;

            for(const [dy, dx] of d){
                const ddy = wy + dy;
                const ddx = wx + dx;

                if(
                    ddy >= 0 && ddy < N &&
                    ddx >= 0 && ddx < M &&
                    field[ddy][ddx] === 1
                ){
                    worm.push([ddy, ddx]);
                }
            }
        }
    }

    answer.push(count);
}

console.log(answer.join("\n"));