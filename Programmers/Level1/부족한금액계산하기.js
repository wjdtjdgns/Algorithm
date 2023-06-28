function solution(price, money, count) {
  let sum = 0;
  for(let i = 1; i<=count; i++) {
      sum += price * i;
      console.log(sum);
  }
  return ((money >= sum) ? 0 : sum - money);
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/82612
