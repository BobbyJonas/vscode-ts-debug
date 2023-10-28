// JZ81 调整数组顺序使奇数位于偶数前面(二)
function reOrderArrayTwo(array: number[]): number[] {
  // write code here
  if (!array) return array;
  let kOdd = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      kOdd = i;
      break;
    }
  }
  let k = 0;
  const newArray = array;
  while (k < newArray.length) {
    if (newArray[k] % 2 === 0 && k < kOdd) {
      const t = newArray[k];
      newArray[k] = newArray[kOdd];
      newArray[kOdd] = t;
      kOdd = k;
    }
    if (newArray[k] % 2 === 1 && k > kOdd) {
      kOdd++;
      const t = newArray[kOdd];
      newArray[kOdd] = newArray[k];
      newArray[k] = t;
    }
    k++;
  }
  return newArray;
}

console.log(reOrderArrayTwo([4, 4, 3]));
