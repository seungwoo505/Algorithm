const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin', 'utf8').toString().trim());
const two = [1, 2, 4, 8, 16, 32, 64, 128];

for(let i = 0; i < two.length; i++){
    const minus = two[i] - N;

    if(minus >= 0){
        console.log(minus === 0 ? two[i] : two[i - 1]);
        break;
    }
}