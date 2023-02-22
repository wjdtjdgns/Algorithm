function solution(my_string) {
  my_string = my_string.split(" ");
  let operand = parseInt(my_string[0]);
  for (let i = 1; i < my_string.length; i += 2) {
    if (my_string[i] === "+") {
      operand = operand + parseInt(my_string[i + 1]);
    } else {
      operand = operand - parseInt(my_string[i + 1]);
    }
  }
  return operand;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120902
