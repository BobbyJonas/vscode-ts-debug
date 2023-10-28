function FindContinuousSequence(sum: number): number[][] {
  // 狂口方法
  let i: number = 0;
  let j: number = 0;
  let resArr: number[][] = [];
  while (i < Math.floor(sum / 2)) {
    let current = ((j + 1 + i + 1) * (j - i + 1)) / 2;
    if (current < sum) j++;
    else if (current > sum) i++;
    else {
      let currentArr = [];
      for (let k = i; k <= j; k++) {
        currentArr.push(k + 1);
      }
      resArr.push(currentArr);
      j++;
    }
  }
  return resArr;
}

FindContinuousSequence(3);
