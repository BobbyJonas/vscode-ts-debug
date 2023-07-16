/*
 * @lc app=leetcode.cn id=152 lang=typescript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
function maxProduct(nums: number[]): number {
  let iMax: number = nums[0];
  let iMin: number = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      const t = iMax;
      iMax = iMin;
      iMin = t;
    }
    iMax = Math.max(iMax * nums[i], nums[i]);
    iMin = Math.min(iMin * nums[i], nums[i]);

    max = Math.max(max, iMax);
  }
  return max;
}
// @lc code=end
console.log(maxProduct([2, -5, -2, -4, 3]));
