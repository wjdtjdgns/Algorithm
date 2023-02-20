function solution(emergency) {
  const copy = [...emergency].sort((a, b) => b - a);
  return emergency.map((cur) => copy.indexOf(cur) + 1);
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120835
