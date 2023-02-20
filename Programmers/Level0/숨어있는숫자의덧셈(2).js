function solution(my_string) {
  my_string = my_string.replace(/[a-z]/gi, " ");
  const sum = my_string.split(" ").filter((it) => !isNaN(parseInt(it)));
  return sum.reduce((acc, cur) => acc + parseInt(cur), 0);
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120864?language=javascript
