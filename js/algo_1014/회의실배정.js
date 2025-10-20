const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const n = data[0];
const meetings = [];
for (let i = 0, idx = 1; i < n; i++, idx += 2) {
  const s = data[idx], e = data[idx + 1];
  meetings.push([s, e]);
}

meetings.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let cnt = 0, lastEnd = 0;
for (const [s, e] of meetings) {
  if (s >= lastEnd) { cnt++; lastEnd = e; }
}
console.log(cnt);