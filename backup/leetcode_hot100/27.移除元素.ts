/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let l = nums.length;
  for (let i = 0; i < l; i++) {
    if (nums[i] === val) nums[i] = Infinity;
  }
  let i1 = 0;
  let i2 = 0;
  while (i2 < nums.length) {
    while (nums[i2] === Infinity) {
      i2++;
      l--;
    }
    nums[i1] = nums[i2];
    i1++;
    i2++;
  }
  while (nums.length > l) nums.pop();
  return l;
}
// @lc code=end
removeElement([], 1);
