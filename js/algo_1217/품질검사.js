const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);
const N = Number(input[1]);
const test = [];
const component = Array.from({ length : a + b + c + 1}, () => 2);

for(let n = 1; n <= N; n++){
    test.push(input[n + 1].split(" ").map(Number));
}

test.sort((a, b) => b[3] - a[3]);

for(const [i, j, k, r] of test){
    if(r === 1){ // 품질 합격
        component[i] = 1;
        component[j] = 1;
        component[k] = 1;
    }else{ // 품질 불합격
        component[i] = component[i] === 1 ? 1 : component[i] === 0 ? 0 : component[j] === 1 && component[k] === 1 ? 0 : 2;
        component[j] = component[j] === 1 ? 1 : component[j] === 0 ? 0 : component[i] === 1 && component[k] === 1 ? 0 : 2;
        component[k] = component[k] === 1 ? 1 : component[k] === 0 ? 0 : component[i] === 1 && component[j] === 1 ? 0 : 2;
    }
}

const answer = [];
for(let com = 1; com <= a + b + c; com++){
    answer.push(component[com]);
}

console.log(answer.join("\n"));