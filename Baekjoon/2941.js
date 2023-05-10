let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const croatianAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (const k of croatianAlphabet) {
  if (input.includes(k)) {
    input = input.replaceAll(k, "1");
  }
}

console.log(input.length);

// https://www.acmicpc.net/problem/2941
