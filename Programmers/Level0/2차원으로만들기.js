function solution(num_list, n) {
  const answer = [];

  for (let i = 0; i < num_list.length / n; i++) {
    answer.push(num_list.slice(i * n, i * n + n));
  }
  return answer;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120842?language=javascript
