const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = input[0];

let max = 0;

for(let n = 1; n <= N; n++){
    const [one, two, three] = input[n].split(" ").map(Number);

    if(one === two && two === three){
        max = Math.max(max, 10000 + (one * 1000));
    }else if((one === two && two !== three) || (one === three && two !== three) || (two === three && one !== two)){
        max = Math.max(max, 1000 + ((one === two || one === three ? one : two) * 100));
    }else {
        max = Math.max(max, Math.max(one, two, three) * 100);
    }
}

console.log(max);