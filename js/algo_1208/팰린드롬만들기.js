const name = require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim().split('');

const cnt = Array(26).fill(0);
for (const ch of name) {
  const idx = ch.charCodeAt(0) - 'A'.charCodeAt(0);
  cnt[idx]++;
}

let oddCount = 0;
let oddChar = '';
for (let i = 0; i < 26; i++) {
  if (cnt[i] % 2 === 1) {
    oddCount++;
    oddChar = String.fromCharCode('A'.charCodeAt(0) + i);
  }
}

if (oddCount > 1) {
  console.log("I'm Sorry Hansoo");
  return;
}

let left = '';
for (let i = 0; i < 26; i++) {
  left += String.fromCharCode('A'.charCodeAt(0) + i).repeat(Math.floor(cnt[i] / 2));
}

const center = oddChar;
const right = left.split('').reverse().join('');

console.log(left + center + right);