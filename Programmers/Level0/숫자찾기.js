function solution(num, k) {
  const result = num.toString().indexOf(k.toString());
  return result === -1 ? -1 : result + 1;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120904
