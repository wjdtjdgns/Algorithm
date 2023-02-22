function solution(s) {
  const stack = [0];
  s = s.split(" ");
  s.forEach((it) => {
    if (it === "Z") {
      stack.pop();
    } else {
      stack.push(parseInt(it));
    }
  });
  return stack.reduce((acc, cur) => {
    return (acc += cur);
  });
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120853
