function solution(keyinput, board) {
  let x = 0,
    y = 0;
  const [limitX, limitY] = board.map((it) => Math.floor(it / 2));
  keyinput.forEach((cur) => {
    if (cur === "left") x--;
    else if (cur === "right") x++;
    else if (cur === "up") y++;
    else y--;

    if (Math.abs(x) > limitX) {
      x = x > 0 ? limitX : limitX * -1;
    }

    if (Math.abs(y) > limitY) {
      y = y > 0 ? limitY : limitY * -1;
    }
  });

  return [x, y];
}

// 출처 : 프로그래머스 코딩테스트 연습, https://school.programmers.co.kr/learn/courses/30/lessons/120861
