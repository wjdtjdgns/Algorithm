const input = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim()
);

console.log(Math.floor(Math.sqrt(input)));

// 출처 : Baekjoon online judge, https://www.acmicpc.net/problem/13909
