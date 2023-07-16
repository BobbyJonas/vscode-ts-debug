/*
 * @lc app=leetcode.cn id=45 lang=typescript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
function jump(nums: number[]): number {
  function simulate(current: number, steps: number): number {
    let max = 0;
    let maxIndex = -1;
    for (let i = current; i <= current + steps; i++) {
      const now = nums[i] - (current + steps - i);
      if (now > max) {
        max = now;
        maxIndex = i;
      }
    }
    return maxIndex;
  }
  if (!nums?.[0]) return 0;
  if (nums.length === 1 && nums[0] === 1) return 0;
  let i: number = 0;
  let res: number = 1;
  let step: number = nums[i];
  while (i + step < nums.length - 1) {
    i = simulate(i, step);
    step = nums[i];
    res++;
  }
  return res;
}
// @lc code=end
