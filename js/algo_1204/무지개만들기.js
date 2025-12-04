const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const N = Number(input[0]);
const color = input[1].split("");

const rainbow = {
    'R' : false,
    'O' : false,
    'Y' : false,
    'G' : false,
    'B' : false,
    'I' : false,
    'V' : false,
    'r' : false,
    'o' : false,
    'y' : false,
    'g' : false,
    'b' : false,
    'i' : false,
    'v' : false
}

for(const c of color){
    rainbow[c] = true;
}

const R = rainbow['R'] && 
          rainbow['O'] &&
          rainbow['Y'] && 
          rainbow['G'] && 
          rainbow['B'] && 
          rainbow['I'] && 
          rainbow['V'];

const r = rainbow['r'] && 
          rainbow['o'] &&
          rainbow['y'] && 
          rainbow['g'] && 
          rainbow['b'] && 
          rainbow['i'] && 
          rainbow['v'];

console.log((!R && !r) ? "NO!" : (R && r) ? 'YeS' : R ? "YES" : "yes");