const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let i = 0;
const T = data[i++];

const MAX = 10000;

const visited = new Uint16Array(MAX);
let gen = 0;

const prev = new Uint16Array(MAX);
const move = new Uint8Array(MAX);

const q = new Uint16Array(MAX);

const codeToChar = ['', 'D', 'S', 'L', 'R'];

const out = [];
for (let tc = 0; tc < T; tc++) {
  const S = data[i++], E = data[i++];
  gen++;

  let head = 0, tail = 0;
  q[tail++] = S;
  visited[S] = gen;

  while (head < tail) {
    const n = q[head++];
    if (n === E) break;

    // D
    let nxt = (n * 2) % 10000;
    if (visited[nxt] !== gen) {
        visited[nxt] = gen; prev[nxt] = n; move[nxt] = 1;
        if (nxt === E) { 
            head = tail; 
            q[tail++] = nxt; 
            break; 
        }
        q[tail++] = nxt;
    }
    // S
    nxt = n === 0 ? 9999 : n - 1;
    if (visited[nxt] !== gen) {
        visited[nxt] = gen; prev[nxt] = n; move[nxt] = 2;
        if (nxt === E) { 
            head = tail; 
            q[tail++] = nxt; 
            break; 
        }
        q[tail++] = nxt;
    }
    // L
    nxt = (n % 1000) * 10 + ((n / 1000) | 0);
    if (visited[nxt] !== gen) {
        visited[nxt] = gen; prev[nxt] = n; move[nxt] = 3;
        if (nxt === E) { 
            head = tail; 
            q[tail++] = nxt; 
            break; 
        }
        q[tail++] = nxt;
    }
    // R
    nxt = ((n / 10) | 0) + (n % 10) * 1000;
    if (visited[nxt] !== gen) {
        visited[nxt] = gen; prev[nxt] = n; move[nxt] = 4;
        if (nxt === E) { 
            head = tail; 
            q[tail++] = nxt; 
            break; 
        }
        q[tail++] = nxt;
    }
  }

  const path = [];
  let cur = E;
  while (cur !== S) {
    const m = move[cur];
    path.push(codeToChar[m]);
    cur = prev[cur];
  }
  out.push(path.reverse().join(''));
}

console.log(out.join('\n'));