const [ D, H, W ] = require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim().split(' ');
const ratio = Math.sqrt( H * H + W * W);
const height = Math.floor(D * H / ratio);
const width = Math.floor(D * W / ratio);

console.log(height, width);