function GetNumberOfK(data: number[], k: number): number {
  function binarySearch(searchArray: number[], target: number): number {
    let i = 0;
    let j = searchArray.length - 1;
    if (j < 0) return -1;
    if (searchArray[i] === target) return i;
    if (searchArray[j] === target) return j;
    while (i < j) {
      let k = Math.floor((j + i) / 2);
      if (searchArray[k] > target) {
        j = k - 1;
      }
      if (searchArray[k] < target) {
        i = k + 1;
      }
      if (searchArray[k] === target) return k;
    }
    if (searchArray[i] === target) return i;
    if (searchArray[j] === target) return j;
    return -1;
  }

  let left = binarySearch(data, k);
  if (left === -1) return 0;
  let right = left;

  while (left > 0) {
    if (data[left - 1] === k) left--;
    else break;
  }

  while (right < data.length) {
    if (data[right + 1] === k) right++;
    else break;
  }

  return right - left + 1;
}
