function solution(dots) {
  dots.sort((a, b) => a[0] - b[0]);
  const x = Math.abs(dots[0][0] - dots[3][0]);
  dots.sort((a, b) => a[1] - b[1]);
  const y = Math.abs(dots[0][1] - dots[3][1]);
  return x * y;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120860
