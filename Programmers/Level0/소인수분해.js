function solution(n) {
  const answer = [];
  let i = 2;
  while (n > 1) {
    if (n % i === 0) {
      answer.push(i);
      n /= i;
      i = 2;
    } else {
      i++;
    }
  }
  return [...new Set(answer)].sort((a, b) => a - b);
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120852
