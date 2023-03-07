function solution(quiz) {
  const answer = [];
  quiz.forEach((it) => {
    it = it.split(" ");
    const operand = [];
    let result = 0;
    for (let i = 0; i < it.length; i++) {
      if (it[i] === "+") {
        result = parseInt(operand.pop()) + parseInt(it[i + 1]);
        i++;
      } else if (it[i] === "-") {
        result = parseInt(operand.pop()) - parseInt(it[i + 1]);
        i++;
      } else if (it[i] === "=") {
        answer.push(result === parseInt(it[i + 1]) ? "O" : "X");
        break;
      } else {
        operand.push(it[i]);
      }
    }
  });

  return answer;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120907
