const input = require('fs').readFileSync('/dev/stdin').toString().trim()

console.log(+input%2 === 0 ? "CY" : "SK");

// 출처 : Baekjoon online judge, https://www.acmicpc.net/problem/9655
