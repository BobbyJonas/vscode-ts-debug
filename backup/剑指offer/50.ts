function duplicate(numbers: number[]): number {
  let checkArr: boolean[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!checkArr[numbers[i]]) {
      checkArr[numbers[i]] = true;
    } else {
      return numbers[i];
    }
  }
  return -1;
}
