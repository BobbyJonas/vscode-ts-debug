/*
 * @lc app=leetcode.cn id=153 lang=typescript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
function findMin(nums: number[]): number {
  if (nums[0] < nums[nums.length - 1]) return nums[0];
  let i = 0;
  let j = nums.length - 1;
  do {
    const k = Math.floor((i + j) / 2);
    if (nums[k] < nums[j]) j = k;
    if (nums[k] > nums[i]) i = k;
  } while (j - i > 1);
  return nums[j];
}
// @lc code=end
console.log(findMin([3, 4, 5, 1, 2]));
