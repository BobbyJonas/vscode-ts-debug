/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
  function findPoint(nums0: number[]): number {
    if (nums0[0] <= nums0[nums0.length - 1]) return 0;
    let i0 = 0;
    let i1 = nums0.length - 1;
    while (i1 - i0 > 1) {
      const k = Math.floor((i0 + i1) / 2);
      if (nums0[k] > nums0[i0]) i0 = k;
      if (nums0[k] < nums0[i1]) i1 = k;
    }
    return i1;
  }

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

  const pointIndex = findPoint(nums);
  if (target <= nums[nums.length - 1]) {
    return binarySearch(nums, target, pointIndex, nums.length - 1);
  }
  return binarySearch(nums, target, 0, pointIndex - 1);
}
// @lc code=end

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
