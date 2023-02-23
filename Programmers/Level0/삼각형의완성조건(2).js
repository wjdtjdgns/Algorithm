function solution(sides) {
  sides.sort((a, b) => a - b);
  let count = 0;
  const max = sides[1];
  const min = sides[0];
  for (let i = max - min + 1; i <= max; i++) {
    count++;
  }
  for (let i = max + 1; i < max + min; i++) {
    count++;
  }
  return count;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120868
