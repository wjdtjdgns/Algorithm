function solution(chicken) {
  let count = 0;
  while (chicken >= 10) {
    count += Math.floor(chicken / 10);
    chicken = Math.floor(chicken / 10 + (chicken % 10));
  }
  return count;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120884
