const [H, W, N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(v => parseInt(v));

console.log(Math.ceil(H / (N + 1)) * Math.ceil(W / (M + 1)));

// 출처 : Baekjoon online judge, https://www.acmicpc.net/problem/23971