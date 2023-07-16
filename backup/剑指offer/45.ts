function IsContinuous(numbers: number[]): boolean {
  function sortNumber(a: number, b: number) {
    return a - b;
  }
  numbers.sort(sortNumber);
  let i = 0;
  while (numbers[i] === 0) {
    i++;
  }
  let numZero = i;
  let start = numbers[i];
  let k0 = 1;
  let k1 = 0;
  i++;
  while (i < numbers.length && numZero >= 0) {
    if (numbers[i] + k1 !== start + k0) {
      if (numZero === 0) break;
      numZero--;
      k1--;
    } else {
      start = numbers[i];
      k0 = 1;
      k1 = 0;
      i++;
    }
  }
  if (i < numbers.length) return false;
  else return true;
}

console.log(IsContinuous([0, 3, 2, 6, 4]));
