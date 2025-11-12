const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);
const C = Number(input[1]);

const computer = Array.from({ length : N + 1}, () => []);
const visible = Array.from({ length : N + 1}, () => false);

for(let c = 2; c <= C + 1; c++){
    const [s, e] = input[c].split(" ").map(Number);
    computer[s].push(e);
    computer[e].push(s);
}

const virus = [1];
let v = 0;
let count = -1;

while( v < virus.length){
    const now = virus[v++];
    
    if(visible[now]) continue;
    visible[now] = true;
    count++;

    for(const c of computer[now]){
        if(!visible[c]) virus.push(c);
    }
}

console.log(count);