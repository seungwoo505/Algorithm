const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [S, E] = input[0].split(' ').map(Number);

const position = Array.from({ length :  100001 }, () => -1);
const queue = [];
queue.push(S);
position[S] = 0;
let q = 0;

while(q < queue.length){
    const now = queue[q++];

    if(now === E){
        console.log(position[now]);
        process.exit(0);
    }

    if(now + 1 <= 100000 && ( position[now + 1] === -1 || position[now + 1] > ( position[now] + 1 ) )){
        queue.push(now + 1);
        position[now + 1] = position[now] + 1;
    }
    if(now - 1 >= 0 && ( position[now - 1] === -1 || position[now - 1] > ( position[now] + 1 ) )){
        queue.push(now - 1);
        position[now - 1] = position[now] + 1;
    }
    if(now * 2 <= 100000 && ( position[now * 2] === -1 || position[now * 2] > position[now] )){
        queue.push(now * 2);
        position[now * 2] = position[now];
    }
}