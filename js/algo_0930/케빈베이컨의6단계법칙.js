const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

// 첫 번째 줄: N(유저의 수), M(관계의 수)
const [N, M] = input[0].split(' ').map(Number);

// 다음 M줄: 친구 관계
const relations = [];

for(let i = 0; i <= N; i++){
    relations.push([]);
}

for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    if(!relations[a].includes(b)){
        relations[a].push(b);
        relations[b].push(a);
    }
}

const bacon = [];

bacon.push(0);

for(let i = 1; i <= N; i++){
    const friend = [];
    let count = [];
    
    for(let f = 0; f <= N; f++){
        friend.push(0);
    }

    for(let c of relations[i]){
        count.push(c);
        friend[c] = 1;
    }

    while(count.length > 0){
        const cnt = count.shift();

        for(let c of relations[cnt]){
            if(friend[c] === 0){
                count.push(c);
                friend[c] = friend[cnt] + 1;
            }
        }
    }

    bacon.push(friend);
}

let answer = [5001, 101];

for(let b in bacon){
    if(b === "0") continue;

    let cnt = 0;

    for(let bb of bacon[b]){
        cnt += bb;
    }

    if(answer[0] > cnt) answer = [ cnt, b ];
}

console.log(answer[1]);