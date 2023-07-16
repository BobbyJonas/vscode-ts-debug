/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  function binarySearch(nums0: number[], target0: number, start: number, end: number): number {
    let i0 = start;
    let i1 = end;
    while (i1 >= i0) {
      const k = Math.floor((i0 + i1) / 2);
      if (nums0[k] > target0) i1 = k - 1;
      else if (nums0[k] < target0) i0 = k + 1;
      else return k;
    }
    return -1;
  }
  function binarySearchSmallest(
    nums0: number[],
    target0: number,
    start: number,
    end: number
  ): number {
    let i0 = start;
    let i1 = end;
    while (i1 >= i0 && i0 >= 0 && i1 < nums0.length) {
      const k = Math.floor((i0 + i1) / 2);
      if (nums0[k] < target0) i0 = k + 1;
      else i1 = k - 1;
    }
    return i0;
  }
  function binarySearchBiggest(
    nums0: number[],
    target0: number,
    start: number,
    end: number
  ): number {
    let i0 = start;
    let i1 = end;
    while (i1 >= i0 && i0 >= 0 && i1 < nums0.length) {
      const k = Math.floor((i0 + i1) / 2);
      if (nums0[k] > target0) i1 = k - 1;
      else i0 = k + 1;
    }
    return i1;
  }
  const targetIndex = binarySearch(nums, target, 0, nums.length - 1);

  if (targetIndex < 0) return [-1, -1];
  const targetIndexSmallest = binarySearchSmallest(nums, target, 0, targetIndex);
  const targetIndexBiggest = binarySearchBiggest(nums, target, targetIndex, nums.length - 1);

  return [targetIndexSmallest, targetIndexBiggest];
}
// @lc code=end

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
