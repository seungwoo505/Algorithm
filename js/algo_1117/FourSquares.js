const N = Number(require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim());
let target = N;
let count = 0;

while(target > 0){
    let root = Math.floor(Math.sqrt(target));

    target -= Math.pow(root, 2);
    count++;
    console.log(root, target);
}

console.log(count);