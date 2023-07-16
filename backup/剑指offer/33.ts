function GetUglyNumber_Solution(index: number): number {
  function min(a: number, b: number, c: number): number {
    let res = a;
    if (b < res) res = b;
    if (c < res) res = c;
    return res;
  }
  if (index <= 0) return 0;
  let uglyList: number[] = [1];
  let p2 = 0;
  let p3 = 0;
  let p5 = 0;
  for (let i = 0; i < index; i++) {
    let newUgly = min(uglyList[p2] * 2, uglyList[p3] * 3, uglyList[p5] * 5);
    uglyList.push(newUgly);
    if (newUgly % 2 == 0) p2 += 1;
    if (newUgly % 3 == 0) p3 += 1;
    if (newUgly % 5 == 0) p5 += 1;
  }
  return uglyList[index - 1];
}

console.log(GetUglyNumber_Solution(1500));
