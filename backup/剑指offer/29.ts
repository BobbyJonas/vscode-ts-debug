function GetLeastNumbers_Solution(input: number[], k: number): number[] {
  let leastNumArray: number[] = [];
  if (k <= 0) return [];
  function binarySearch(searchArray: number[], target: number): number {
    let i = 0;
    let j = searchArray.length - 1;
    if (j < 0) return 0;
    while (i < j) {
      let k = Math.floor((j + i) / 2);
      if (searchArray[k] > target) {
        j = k - 1;
      }
      if (searchArray[k] < target) {
        i = k + 1;
      }
      if (searchArray[k] === target) {
        i = k;
        j = k;
        break;
      }
    }
    while (searchArray[i] < target && i < searchArray.length) i++;
    while (searchArray[i] === target && i < searchArray.length) i++;
    return i;
  }
  for (let i = 0; i < input.length; i++) {
    let k1: number = 0;
    if (leastNumArray.length >= 1) {
      if (leastNumArray[leastNumArray.length - 1] <= input[i]) k1 = leastNumArray.length;
      else if (leastNumArray[0] > input[i]) k1 = 0;
      else k1 = binarySearch(leastNumArray, input[i]);
    } else k1 = 0;

    if (k1 > leastNumArray.length - 1) {
      leastNumArray.push(input[i]);
    } else {
      leastNumArray.splice(k1, 0, input[i]);
    }
    while (leastNumArray.length > k) leastNumArray.pop();
  }
  return leastNumArray;
}

console.log(
  GetLeastNumbers_Solution(
    [
      234, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233,
      233,
    ],
    10
  )
);
