const [A, B, C] = require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n').map(Number);

console.log(
    (A + B + C === 180) ? (
        (A === 60 && A === B && A === C) ? 'Equilateral' : 
        ((A === B || A === C || B === C) ? "Isosceles" : 
        "Scalene")
    ) : 'Error'
);