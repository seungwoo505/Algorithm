const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const house = []
const chicken = [];

const map = Array.from({ length : N }, (_, i) => input[i + 1].split(" ").map(Number));

for(let i = 0; i < N; i++){
  for(let j = 0; j < N; j++){
    if(map[i][j] === 1) house.push([i, j]);
    else if(map[i][j] === 2) chicken.push([i, j]);
  }
}

const dist = Array.from({ length :  house.length }, () => Array(chicken.length).fill(0));

for(let h = 0; h < house.length; h++){
  const [r1, c1] = house[h];
  for(let c = 0; c < chicken.length; c++){
    const [r2, c2] = chicken[c];
    dist[h][c] = Math.abs(r1 - r2) + Math.abs(c1 - c2);
  }
}

const check = [];
let min = Number.MAX_SAFE_INTEGER;

const dfs = (start, count) => {
  if(count === M){
    let sum = 0;
    for(let h = 0; h < house.length; h++){
      let chkMin = Number.MAX_SAFE_INTEGER;
      for(const c of check){
        const chk = dist[h][c];
        if(chk < chkMin) chkMin = chk;
      }
      sum += chkMin;

      if(sum >= min) return;
    }

    if(sum < min) min = sum;
    return;
  }

  if(start >= chicken.length) return;
  if(count + (chicken.length - start) < M) return;
  

  for(let s = start; s < chicken.length; s++){
    check.push(s);
    dfs(s + 1, count + 1);
    check.pop();
  }
}

dfs(0, 0);
console.log(min.toString());