function solution(balls, share) {
  let n = factorial(balls);
  let m = factorial(share);
  let nm = factorial(balls - share);
  return n / (nm * m);
}

function factorial(num) {
  let ret = BigInt(1);
  for (let i = num; i > 1; i--) {
    ret *= BigInt(i);
  }
  return ret;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120840
