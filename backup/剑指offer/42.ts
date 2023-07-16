function FindNumbersWithSum(array: number[], sum: number): number[] {
  let i = 0;
  let i0 = 0;
  let j = array.length - 1;
  let resArr: number[] = [];
  while (i < j) {
    if (array[i] + array[j] > sum) {
      j--;
      i = i0;
    } else if (array[i] + array[j] < sum) {
      i0 = i;
      i++;
    } else {
      resArr.push(array[i], array[j]);
      break;
    }
  }
  return resArr;
}
