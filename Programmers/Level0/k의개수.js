function solution(i, j, k) {
  let answer = 0;
  while (i <= j) {
    const tmp = i
      .toString()
      .split("")
      .filter((it) => it === k.toString());
    answer += tmp.length;
    i += 1;
  }
  return answer;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120887
