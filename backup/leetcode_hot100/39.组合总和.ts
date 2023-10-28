/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const current: number[] = [];

  function backtack(numLeft: number, currentIndex: number) {
    if (numLeft < 0) return;
    if (numLeft === 0) {
      res.push(JSON.parse(JSON.stringify(current)));
      return;
    }
    for (let i = currentIndex; i < candidates.length; i++) {
      if (numLeft - candidates[i] >= 0) {
        current.push(candidates[i]);
        backtack(numLeft - candidates[i], i);
        current.pop();
      }
    }
  }
  backtack(target, 0);

  return res;
}
// @lc code=end
