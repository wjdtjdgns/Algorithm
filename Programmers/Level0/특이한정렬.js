function solution(numlist, n) {
  numlist.sort((a, b) => {
    if (Math.abs(a - n) > Math.abs(b - n)) return 1;
    else if (Math.abs(a - n) === Math.abs(b - n)) {
      return b - a;
    } else return -1;
  });
  return numlist;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120880
