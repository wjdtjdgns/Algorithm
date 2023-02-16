function solution(order) {
  return [...order.toString()].filter(
    (it) => parseInt(it) % 3 === 0 && parseInt(it) !== 0
  ).length;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120891
