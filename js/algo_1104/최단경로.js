const fs = require('fs');
const a = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let i = 0;
const V = a[i++], E = a[i++], K = a[i++];

const adj = Array.from({ length: V + 1 }, () => []);
for (let e = 0; e < E; e++) {
  const u = a[i++], v = a[i++], w = a[i++];
  adj[u].push([v, w]);
}

const INF = 1e18;
const dist = Array(V + 1).fill(INF);
dist[K] = 0;

const h = [];
function push(x){
  let j = h.push(x) - 1;
  while (j) { const p = (j - 1) >> 1; if (h[p][0] <= h[j][0]) break;
    [h[p], h[j]] = [h[j], h[p]]; j = p; }
}
function pop(){
  if (!h.length) return null;
  const top = h[0], last = h.pop();
  if (h.length) { h[0] = last; let j = 0;
    for (;;) { let l = j*2+1, r = l+1, m = j;
      if (l < h.length && h[l][0] < h[m][0]) m = l;
      if (r < h.length && h[r][0] < h[m][0]) m = r;
      if (m === j) break; [h[j], h[m]] = [h[m], h[j]]; j = m;
    } }
  return top;
}

push([0, K]);
while (h.length) {
  const [d, u] = pop();
  if (d !== dist[u]) continue;
  for (const [v, w] of adj[u]) {
    const nd = d + w;
    if (nd < dist[v]) { dist[v] = nd; push([nd, v]); }
  }
}

let out = '';
for (let v = 1; v <= V; v++) out += (dist[v] === INF ? 'INF' : dist[v]) + '\n';
console.log(out.trim());