function solution(polynomial) {
  polynomial = polynomial.split(" + ");
  const number = polynomial
    .filter((v) => !v.includes("x"))
    .reduce((acc, cur) => {
      return (acc += parseInt(cur));
    }, 0);
  const x = polynomial
    .filter((v) => v.includes("x"))
    .map((v) => v.replace(/x/, ""));
  const xNum = x.reduce((acc, cur) => {
    if (cur === "") return (acc += 1);
    else return (acc += parseInt(cur));
  }, 0);
  if (number === 0 && xNum === 0) return 0;
  const answer =
    (xNum === 0 ? "" : xNum === 1 ? "x" : `${xNum}x`) +
    (number === 0 ? "" : xNum === 0 ? number.toString() : ` + ${number}`);
  return answer;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120863
