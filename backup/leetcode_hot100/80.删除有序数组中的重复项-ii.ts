/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let i = 0;
  let j = 0;
  while (j < nums.length) {
    while (j < nums.length - 2 && nums[j] === nums[j + 1] && nums[j] === nums[j + 2]) j++;
    nums[i] = nums[j];
    i++;
    j++;
  }
  while (nums.length > i) nums.pop();
  return nums.length;
}
// @lc code=end
console.log(removeDuplicates([5, 5, 5, 5, 5]));
