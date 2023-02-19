function solution(array, n) {
  let closest = array[0];

  array.forEach((cur) => {
    if (Math.abs(cur - n) <= Math.abs(closest - n)) {
      if (Math.abs(cur - n) === Math.abs(closest - n)) {
        closest = Math.min(cur, closest);
      } else {
        closest = cur;
      }
    }
  });

  return closest;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120890
