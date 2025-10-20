const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

// 첫 번째 줄: N(세로 크기), M(가로 수)
const [N, M] = input[0].split(' ').map(Number);

const map = [];
const dYX = [[1, 0], [0, 1], [-1, 0], [0, -1]];

for(let n = 1; n <= N; n++){
    map.push([]);
    for(let m of input[n].split(' ').map(Number)){
        map[n - 1].push(m);
    }
}

// 목표 지점 찾기 및 거리 초기화
let target = [];
let distance = [];
for(let n = 0; n < N; n++){
    distance.push([]);
    for(let m = 0; m < M; m++){
        if(map[n][m] === 2){
            target.push([n, m, 0]);
        }

        distance[n].push(map[n][m] === 1 ? -1 : 0);
    }
}

while(target.length > 0){
    const move = target.shift();

    if(map[move[0]][move[1]] === -1) continue;
    map[move[0]][move[1]] = -1;
    distance[move[0]][move[1]] = move[2];

    for(let d of dYX){
        let newY = move[0] + d[0];
        let newX = move[1] + d[1];
        let newCnt = move[2] + 1;

        if( newY >= 0 && newY < N &&
            newX >= 0 && newX < M &&
            map[newY][newX] !== -1 &&
            map[newY][newX] !== 0
        ){
            target.push([newY, newX, newCnt]);
        }
    }
}

let answer = "";

for(let n of distance){
    for(let m of n){
        answer += m + " ";
    }
    answer += "\n";
}

console.log(answer);