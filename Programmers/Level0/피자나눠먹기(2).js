function solution(n) {
  const L = get(n, 6);
  return L / 6;
}

function get(n, m) {
  let G = 0;
  let L = 0;

  let num = Math.max(n, m);

  for (let i = 1; i <= num; i++) {
    if (n % i === 0 && m % i === 0) {
      G = i;
    }
  }

  L = (n * m) / G;

  return L;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120815
