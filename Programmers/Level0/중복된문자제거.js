function solution(my_string) {
  my_string = [...new Set(my_string)];
  return my_string.join("");
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120888
