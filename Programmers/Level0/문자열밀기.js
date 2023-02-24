function solution(A, B) {
  if (A === B) return 0;
  A = [...A];
  for (let i = 1; i <= A.length; i++) {
    A.unshift(A.pop());
    if (A.join("") === B) return i;
  }
  return -1;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120921
