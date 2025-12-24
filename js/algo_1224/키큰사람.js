const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');
let cnt = 0;
const answer = [];

while(true){
    const T = Number(input[cnt++]);

    if(T === 0) break;

    const max = ['', 0];

    for(let t = 0; t < T; t++){
        const [name, height] = input[cnt++].split(" ");
        if(max[1] < Number(height)){
            max[0] = name;
            max[1] = Number(height);
        }else if (max[1] === Number(height)){
            max[0] += ` ${name}`;
        }
    }
    answer.push(max[0]);
}

console.log(answer.join("\n"));