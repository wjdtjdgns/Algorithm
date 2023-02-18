function solution(n) {
  let answer = 1,
    i = 1;
  while (true) {
    answer *= i;

    if (answer === n) {
      return i;
    }
    if (answer > n) {
      return i - 1;
    }
    i++;
  }
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120848
