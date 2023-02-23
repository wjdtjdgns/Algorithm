function solution(spell, dic) {
  const word = spell.sort().join("");
  const sortDic = dic.map((it) => [...it].sort().join(""));
  return sortDic.includes(word) ? 1 : 2;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120869
