function solution(n) {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    answer++;
    while (answer.toString().includes("3") || answer % 3 === 0) {
      answer++;
    }
  }

  return answer;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120871
