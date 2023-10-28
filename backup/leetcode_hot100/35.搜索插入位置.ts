/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let i0 = 0;
  let i1 = nums.length - 1;
  while (i0 < i1) {
    const k = Math.floor((i0 + i1) / 2);
    if (nums[k] === target) return k;
    if (nums[k] < target) {
      if (k + 1 > i1) break;
      i0 = k + 1;
    } else {
      i1 = k - 1;
      if (i1 < i0) break;
    }
  }
  if (nums[i0] < target) return i0 + 1;
  return i0;
  console.log(i0);
}
// @lc code=end

console.log(searchInsert([1, 3, 5, 6], 2));
