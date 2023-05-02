const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

class MaxHeap {
  constructor() {
    this.heap = [null];
  }
}

MaxHeap.prototype.push = function (value) {
  this.heap.push(value);
  let currentIndex = this.heap.length - 1;
  let parentIndex = Math.floor(currentIndex / 2);

  while (parentIndex !== 0 && this.heap[parentIndex] < value) {
    const temp = this.heap[parentIndex];
    this.heap[parentIndex] = value;
    this.heap[currentIndex] = temp;

    currentIndex = parentIndex;
    parentIndex = Math.floor(currentIndex / 2);
  }
};

MaxHeap.prototype.pop = function () {
  if (this.heap.length === 2) return this.heap.pop();
  if (this.heap.length === 1) return null;

  const returnValue = this.heap[1];
  this.heap[1] = this.heap.pop();

  let currentIndex = 1;
  let leftIndex = 2;
  let rightIndex = 3;

  while (true) {
    let swapIndex = null;
    if (
      this.heap[leftIndex] !== undefined &&
      this.heap[currentIndex] < this.heap[leftIndex]
    ) {
      swapIndex = leftIndex;
    }

    if (
      this.heap[rightIndex] !== undefined &&
      this.heap[currentIndex] < this.heap[rightIndex] &&
      (swapIndex === null || this.heap[swapIndex] < this.heap[rightIndex])
    ) {
      swapIndex = rightIndex;
    }

    if (swapIndex === null) break;

    const temp = this.heap[currentIndex];
    this.heap[currentIndex] = this.heap[swapIndex];
    this.heap[swapIndex] = temp;
    currentIndex = swapIndex;
    leftIndex = currentIndex * 2;
    rightIndex = currentIndex * 2 + 1;
  }
  return returnValue;
};

MaxHeap.prototype.isEmpty = function () {
  return this.heap.length === 1;
};

const maxHeap = new MaxHeap();
const ret = [];
for (let i = 0; i < +N; i++) {
  if (+input[i] === 0) {
    maxHeap.isEmpty() ? ret.push(0) : ret.push(maxHeap.pop());
  } else {
    maxHeap.push(+input[i]);
  }
}

console.log(ret.join("\n"));

// 출처 : Baekjoon online judge, https://www.acmicpc.net/problem/11279
