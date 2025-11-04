const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const board = Array.from({ length: R }, (_, i) =>
  input[i + 1].trim().split('').map(ch => ch.charCodeAt(0) - 65)
);

const d = [[1,0],[0,1],[-1,0],[0,-1]];
let answer = 1;

function dfs(y, x, used, depth) {
  if (depth > answer) answer = depth;

  for (let k = 0; k < 4; k++) {
    const ny = y + d[k][0], nx = x + d[k][1];
    if (ny < 0 || ny >= R || nx < 0 || nx >= C) continue;

    const bit = 1 << board[ny][nx];
    if ((used & bit) === 0) {
      dfs(ny, nx, used | bit, depth + 1);
    }
  }
}

const startBit = 1 << board[0][0];
dfs(0, 0, startBit, 1);
console.log(answer);