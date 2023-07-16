function PrintMinNumber(numbers: number[]): string {
  function min(a: number, b: number) {
    if (a < b) return a;
    else return b;
  }
  function compareRadixNumber(a: string, b: string): boolean {
    // *  a > b    true
    // *  a <= b   false
    let len = min(a.length, b.length);
    for (let i = 0; i < len; i++) {
      if (a[i] > b[i]) return true;
      else if (a[i] < b[i]) return false;
    }
    if (a.length === b.length) return false;
    else {
      return compareRadixNumber(a + b, b + a);
    }
  }
  function radixQuickSort(numbers: number[]): number[] {
    if (numbers.length <= 0) return [];
    let pivotIndex = Math.floor(Math.random() * numbers.length);
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < numbers.length; i++) {
      if (
        i != pivotIndex &&
        !compareRadixNumber(
          Number.prototype.toString.call(numbers[i]),
          Number.prototype.toString.call(numbers[pivotIndex])
        )
      ) {
        leftArr.push(numbers[i]);
      } else if (i != pivotIndex) {
        rightArr.push(numbers[i]);
      }
    }
    return radixQuickSort(leftArr).concat(numbers[pivotIndex], radixQuickSort(rightArr));
  }
  return radixQuickSort(numbers).join('');
}

console.log(PrintMinNumber([3, 32, 321]));
