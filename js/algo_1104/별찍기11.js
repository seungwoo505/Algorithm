const N = Number(require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim());

let star = [
    "  *  ",
    " * * ",
    "*****"
];

for(let h = 3; h < N; h <<= 1){
    const pad = ' '.repeat(h);
    const top = star.map(s => pad + s + pad);
    const bottom = star.map(s => s + ' ' + s);
    star = top.concat(bottom);
}

console.log(star.join("\n"));