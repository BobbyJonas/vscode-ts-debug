/* eslint-disable no-restricted-syntax */
/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  const hashMap: {
    [prop: number]: number;
  } = {};
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = (hashMap[nums[i]] ?? 0) + 1;
    if (hashMap[nums[i]] > nums.length / 2) return nums[i];
  }
  for (const key in hashMap) {
    if (hashMap[key] > nums.length / 2) return Number(key);
  }
  return -1;
}
// @lc code=end
