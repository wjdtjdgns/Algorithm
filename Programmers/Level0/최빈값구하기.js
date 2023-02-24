function solution(array) {
  if (array.length === 1) return array[0];

  const map = new Map();

  for (const v of array) {
    map.set(v, map.get(v) + 1 || 1);
  }
  const arr = [...map].sort((a, b) => b[1] - a[1]);

  if (arr.length === 1) return arr[0][0];
  return arr[0][1] === arr[1][1] ? -1 : +arr[0][0];
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120812
