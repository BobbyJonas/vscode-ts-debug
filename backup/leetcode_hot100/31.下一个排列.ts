/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=31 lang=typescript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  function findLastOrderedNumber(nums0: number[]): number {
    for (let i = nums0.length - 1; i > 0; i--) {
      if (nums0[i - 1] < nums0[i]) return i - 1;
    }
    return -1;
  }
  const lastOrderIndex = findLastOrderedNumber(nums);
  let swapIndex = -1;
  for (let i = lastOrderIndex + 1; i < nums.length; i++) {
    if (nums[i] > nums[lastOrderIndex]) {
      swapIndex = i;
    }
    if (swapIndex !== -1 && nums[i] > nums[lastOrderIndex] && nums[i] < nums[swapIndex]) {
      swapIndex = i;
    }
  }
  if (swapIndex >= 0) {
    const t = nums[swapIndex];
    nums[swapIndex] = nums[lastOrderIndex];
    nums[lastOrderIndex] = t;
  }
  for (let i = lastOrderIndex + 1; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        const t1 = nums[i];
        nums[i] = nums[j];
        nums[j] = t1;
      }
    }
  }
  console.log(nums);
}
// @lc code=end

console.log(nextPermutation([1, 2, 3]));
