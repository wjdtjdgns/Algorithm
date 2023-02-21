function solution(array) {
  return array
    .join()
    .split("")
    .filter((it) => parseInt(it) === 7).length;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120912
