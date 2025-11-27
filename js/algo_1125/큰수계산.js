const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
const N = Number(input[0]);
const tokens = input.slice(1, 1 + (2 * N - 1));

const nums = [];
const ops = [];

for (let i = 0; i < tokens.length; i++) {
  if (i % 2 === 0) nums.push(BigInt(tokens[i])); // 숫자
  else ops.push(tokens[i]); // 연산자
}

function floorDiv(a, b) {
  if (b === 0n) throw new Error('나오면 안됨');

  const neg = (a < 0n) !== (b < 0n);
  let A = a < 0n ? -a : a;
  let B = b < 0n ? -b : b;

  let q = A / B;
  const r = A % B;

  if (neg && r !== 0n) q += 1n; // 음수이고 나머지가 있을 경우

  return neg ? -q : q;
}

let newNums = [nums[0]];
let newOps = [];

for (let i = 0; i < ops.length; i++) {
  const op = ops[i];
  const b = nums[i + 1];

  if (op === '*' || op === '/') {
    const a = newNums.pop();
    let r;
    if (op === '*') r = a * b;
    else r = floorDiv(a, b);
    newNums.push(r);
  } else {
    newOps.push(op);
    newNums.push(b);
  }
}

let res = newNums[0];

for (let i = 0; i < newOps.length; i++) {
  const op = newOps[i];
  const b = newNums[i + 1];

  if (op === '+') res += b;
  else res -= b;
}

console.log(res.toString());