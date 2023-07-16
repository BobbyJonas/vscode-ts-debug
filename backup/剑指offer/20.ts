let a: number[] = [];
let arrMinIndex: number[] = [];
function push(node: number): void {
  a.push(node);
  if (node < min()) {
    arrMinIndex.push(a.length - 1);
  }
}
function pop(): void {
  a.pop();
  if (arrMinIndex.length > 0) {
    if (arrMinIndex[arrMinIndex.length - 1] >= a.length) arrMinIndex.pop();
  }
}
function top2(): number {
  if (a.length > 0) return a[a.length - 1];
  else return -1;
}
function min(): number {
  if (arrMinIndex.length > 0) {
    return a[arrMinIndex[arrMinIndex.length - 1]];
  } else return Number.MAX_VALUE;
}
module.exports = {
  push: push,
  pop: pop,
  top: top,
  min: min,
};
