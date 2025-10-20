const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

// 첫 번째 줄: N(세로 크기), M(가로 수)
const [N, M] = input[0].split(' ').map(Number);
const jump = Array.from({length : 101}, () => 0);
const dist = Array.from({length : 101}, () => -1);

for(let i = 1; i <= N + M; i++){
    const [a, b] = input[i].split(" ").map(Number);

    jump[a] = b;
}

const queue = [];
let head = 0;

dist[1] = 0;
queue.push(1);

while(head < queue.length){
    const cur = queue[head++];

    if(cur === 100) break;
    
    for(let d = 1; d <= 6; d++){ //주사위 돌리기
        let next = cur + d;

        if(next > 100) continue;

        if(jump[next] !== 0) next = jump[next];
        
        if(dist[next] === -1){
            dist[next] = dist[cur] + 1;
            queue.push(next);
        }
    }
}

console.log(dist[100]);