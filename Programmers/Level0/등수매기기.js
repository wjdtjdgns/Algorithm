function solution(score) {
  const average = score.map(([a, b]) => (a + b) / 2);
  const sort_average = [...average].sort((a, b) => b - a);
  return average.map((v) => sort_average.indexOf(v) + 1);
}

// 출처 : 프로그래머스 코딩테스트 연습 : https://school.programmers.co.kr/learn/courses/30/lessons/120882
