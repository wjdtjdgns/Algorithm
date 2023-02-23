function solution(id_pw, db) {
  const check = db.filter((v) => v[0] === id_pw[0]).map((v) => v[1]);
  return check.length === 0
    ? "fail"
    : check.includes(id_pw[1])
    ? "login"
    : "wrong pw";
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120883
