/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=179 lang=typescript
 *
 * [179] 最大数
 */

// @lc code=start
function largestNumber(nums: number[]): string {
  function compare(a: string, b: string): boolean {
    const lmin = Math.min(a.length, b.length);
    for (let i = 0; i < lmin; i++) {
      if (a[i] > b[i]) return true;
      if (a[i] < b[i]) return false;
    }
    if (a.length === b.length) return false;
    return compare(a + b, b + a);
  }

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (!compare(String(nums[i]), String(nums[j]))) {
        const t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
      }
    }
  }

  let res: string = '';
  for (let i = 0; i < nums.length; i++) {
    res += nums[i];
  }
  while (res[0] === '0' && res.length > 1) res = res.slice(1);
  return res;
}
// @lc code=end
console.log(largestNumber([3, 30, 34, 5, 9]));
