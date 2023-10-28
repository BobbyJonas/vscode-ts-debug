/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  function backTrack(depth: number, currentNum: number, currentArr: number[]): void {
    if (depth >= k) {
      res.push(JSON.parse(JSON.stringify(currentArr)));
    } else {
      for (let i = currentNum + 1; i <= n; i++) {
        backTrack(depth + 1, i, [...currentArr, i]);
      }
    }
  }
  backTrack(0, 0, []);
  return res;
}
// @lc code=end
