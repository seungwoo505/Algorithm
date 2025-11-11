const fs = require('fs');
const X = Number(fs.readFileSync('/dev/stdin', 'utf8').toString().trim());

let min = 1000001;

const cal = (x, c) => {
    if(x === 1) {
        min = Math.min(min, c);
        return;
    }

    if(min < c) return;

    if(x % 3 === 0) cal(x / 3, c + 1);
    if(x % 2 === 0) cal(x / 2, c + 1);
    cal(x - 1, c + 1);
}

cal(X, 0);

console.log(min);