function solution(n) {
  const answer = new Set();
  for (let i = 4; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) answer.add(i);
    }
  }
  return answer.size;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120846
