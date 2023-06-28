function solution(n) {
  return +parseInt(n.toString(3).split("").reverse().join(""), 3).toString(10);
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/68935
