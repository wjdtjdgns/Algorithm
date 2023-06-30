const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const result = [];

for(const v of input) {
  const arr = v.split(" ").map(i => +i);
  if(arr[0] === 0 && arr[1] === 0 && arr[2] === 0) console.log(result.join("\n"));
  arr.sort((a, b) => a - b);
  if(arr[2] >= arr[1] + arr[0]) {
    result.push("Invalid");
    continue;
  }
  const set = new Set(arr);
  result.push(set.size === 1 ? "Equilateral" : set.size === 2 ? "Isosceles" : "Scalene");
}

// 출처 : Baekjoon online judge, https://www.acmicpc.net/problem/5073
