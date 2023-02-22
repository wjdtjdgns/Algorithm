function solution(numbers, k) {
  let thrower = 0;
  for (let i = 1; i < k; i++) {
    thrower += 2;
    thrower %= numbers.length;
  }
  return numbers[thrower];
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120843
