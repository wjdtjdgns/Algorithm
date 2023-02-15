function solution(array) {
  const max = Math.max(...array);
  return [max, array.findIndex((it) => it === max)];
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120899
