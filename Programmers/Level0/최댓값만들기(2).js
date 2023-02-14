function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 2] * numbers[numbers.length - 1]
  );
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120862
