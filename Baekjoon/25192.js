const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const set = new Set();
let count = 0;

for (let i = 0; i < N; i++) {
  if (input[i] === "ENTER") {
    count += set.size;
    set.clear();
  } else {
    set.add(input[i]);
  }
}
count += set.size;

console.log(count);

// 출처 : Baekjoon online judge, https://www.acmicpc.net/problem/25192
