/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  function recursion(index: number, current: number[]): void {
    if (index >= nums.length) {
      res.push(JSON.parse(JSON.stringify(current)));
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (!current.includes(nums[i])) {
          current.push(nums[i]);
          recursion(index + 1, current);
          current.pop();
        }
      }
    }
  }
  recursion(0, []);
  return res;
}
// @lc code=end
