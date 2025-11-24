const fs = require('fs');
const N = fs.readFileSync(0, 'utf8').toString().trim().split("").map(Number);

let answer = false;

for (let i = 0; i < N.length - 1; i++) {
    let left = 1;
    let right = 1;

    for (let l = 0; l <= i; l++) {
        left *= N[l];
    }

    for (let r = i + 1; r < N.length; r++) {
        right *= N[r];
    }

    if (left === right) {
        answer = true;
        break;
    }
}

console.log(answer ? "YES" : "NO");