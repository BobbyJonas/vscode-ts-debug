function InversePairs(data: number[]): number {
  let count = 0;
  if (data.length <= 0) return 0;

  function divide(data: number[]): number[] {
    if (data.length <= 1) return data;
    let mid = Math.floor(data.length / 2);
    let mergeArr = merge(divide(data.slice(0, mid)), divide(data.slice(mid, data.length)));
    return mergeArr;
  }

  function merge(leftArr: number[], rightArr: number[]): number[] {
    let i = 0;
    let j = 0;
    let mid = leftArr.length;
    let tempArr = [];
    while (i < leftArr.length && j < rightArr.length)
      if (leftArr[i] <= rightArr[j]) {
        tempArr.push(leftArr[i]);
        i++;
      } else {
        tempArr.push(rightArr[j]);
        j++;
        count += mid - i;
      }
    while (i < leftArr.length) {
      tempArr.push(leftArr[i]);
      i++;
    }
    while (j < rightArr.length) {
      tempArr.push(rightArr[j]);
      j++;
    }
    return tempArr;
  }

  divide(data);
  return count % 1000000007;
}

console.log(InversePairs([1, 2, 3, 4, 5, 6, 7, 0]));
