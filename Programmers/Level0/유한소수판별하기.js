function solution(a, b) {
  [a, b] = irreducibleFraction(a, b);
  return getPrimeNum(b).filter((v) => v !== 2 && v !== 5).length > 0 ? 2 : 1;
}

function irreducibleFraction(a, b) {
  for (let i = 2; i <= a; i++) {
    if (b % i === 0 && a % i === 0) {
      b /= i;
      a /= i;
    }
  }
  return [a, b];
}

function getPrimeNum(num) {
  const prime = [];
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    while (num % i === 0) {
      prime.push(i);
      num /= i;
    }
  }
  if (num !== 1) {
    prime.push(num);
  }

  return prime;
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120878
