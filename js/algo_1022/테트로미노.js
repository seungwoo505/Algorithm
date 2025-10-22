const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const [N, M] = lines[0].split(' ').map(Number);

const board = Array.from({ length: N }, (_, i) =>
  lines[i + 1].split(' ').map(Number)
);

const visited = Array.from({ length: N }, () => Array(M).fill(false));
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let answer = 0;
let maxCell = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] > maxCell) maxCell = board[i][j];
  }
}

function dfs(x, y, depth, sum) {
  if (sum + maxCell * (4 - depth) <= answer) return;

  if (depth === 4) {
    if (sum > answer) answer = sum;
    return;
  }

  for (let dir = 0; dir < 4; dir++) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];
    if (nx < 0 || ny < 0 || nx >= N || ny >= M || visited[nx][ny]) continue;

    if (depth === 2) {
      visited[nx][ny] = true;
      dfs(x, y, depth + 1, sum + board[nx][ny]);
      visited[nx][ny] = false;
    }

    visited[nx][ny] = true;
    dfs(nx, ny, depth + 1, sum + board[nx][ny]);
    visited[nx][ny] = false;
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    visited[i][j] = true;
    dfs(i, j, 1, board[i][j]);
    visited[i][j] = false;
  }
}

console.log(String(answer));