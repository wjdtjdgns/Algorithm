function solution(numbers) {
  number = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  number.forEach((it, idx) => {
    numbers = numbers.split(it).join(idx);
  });
  return parseInt(numbers);
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120894
