/*
 * @lc app=leetcode.cn id=137 lang=typescript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  const numHash: {
    [prop: number]: number;
  } = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    numHash[current] = (numHash[current] ?? 0) + 1;
  }
  return Number(Object.keys(numHash).find((item: string) => numHash[Number(item)] === 1));
}
// @lc code=end
