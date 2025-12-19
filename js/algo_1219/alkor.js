const fs = require("fs");

const N = Number(fs.readFileSync(0, "utf8").trim());
let res = [];

if (N % 2 === 1) {

  res.push(1, 2, -3);

  for (let i = 4; res.length < N; i++) {
    res.push(i, -i);
  }
} else {
  for (let i = 1; i <= N / 2; i++) {
    res.push(i, -i);
  }
}

res.push(0);

console.log(res.join(" "));