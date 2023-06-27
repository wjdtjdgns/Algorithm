const [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const set = new Set();

input.forEach(v => {
  const [x, y] = v.split(" ").map(v => +v);
  for(let i = 0; i<10; i++) {
    for(let j = 0; j<10; j++) {
      set.add(`(${i + x}, ${j + y})`)
    }
  }
})

console.log(set.size);

// 출처 : Baekjoon online judge, https://www.acmicpc.net/problem/2563
