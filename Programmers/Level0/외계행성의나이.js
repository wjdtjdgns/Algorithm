function solution(age) {
  const alphabet = "abcdefghij";
  return age
    .toString()
    .split("")
    .map((it) => alphabet[parseInt(it)])
    .join("");
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120834
