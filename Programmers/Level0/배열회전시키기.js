function solution(numbers, direction) {
  direction === "right"
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());
  return numbers;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120844
