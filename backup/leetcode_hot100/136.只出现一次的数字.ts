/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  const numHash: {
    [prop: number]: boolean;
  } = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (numHash[current] === undefined) {
      numHash[current] = true;
    } else if (numHash[current]) {
      numHash[current] = false;
    }
  }
  return Number(Object.keys(numHash).find((item: string) => numHash[Number(item)]));
}
// @lc code=end
