/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): [number, number] {
  function binarySearch(_l: number, _r: number, _target: number): number {
    let l = _l;
    let r = _r;
    while (l <= r && l >= 0 && r < numbers.length) {
      const mid = Math.floor((l + r) / 2);
      if (numbers[mid] > _target) r = mid - 1;
      if (numbers[mid] < _target) l = mid + 1;
      if (numbers[mid] === _target) return mid;
    }
    return -1;
  }
  for (let i = 0; i < numbers.length; i++) {
    const res = binarySearch(i + 1, numbers.length - 1, target - numbers[i]);
    if (res >= 0) {
      return [i + 1, res + 1];
    }
  }
  return [-1, -1];
}
// @lc code=end
console.log(twoSum([2, 7, 11, 15], 9));
