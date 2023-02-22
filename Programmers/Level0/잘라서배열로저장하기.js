function solution(my_str, n) {
  my_str = [...my_str];
  const answer = [];
  while (my_str.length > 0) {
    answer.push(my_str.splice(0, n).join(""));
  }
  return answer;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120913
