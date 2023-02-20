function solution(s) {
  const answer = [];

  [...s].forEach((it) => {
    if (s.indexOf(it) === s.lastIndexOf(it)) answer.push(it);
  });

  return answer.sort().join("");
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120896
