/*
 * @lc app=leetcode.cn id=188 lang=typescript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
function maxProfit(k: number, prices: number[]): number {
  const have: number[][] = [];
  const no: number[][] = [];
  if (!have[0]) have[0] = [-prices[0]];
  if (!no[0]) no[0] = [0];
  for (let i = 1; i <= k; i++) {
    have[0][i] = -Infinity;
    no[0][i] = -Infinity;
  }
  let res = 0;
  for (let i = 1; i < prices.length; i++) {
    if (!have[i]) have[i] = [];
    if (!no[i]) no[i] = [0];

    have[i][0] = Math.max(have[i - 1][0], no[i - 1][0] - prices[i]);
    for (let j = 1; j <= k; j++) {
      have[i][j] = Math.max(have[i - 1][j], no[i - 1][j] - prices[i]);
      no[i][j] = Math.max(no[i - 1][j], have[i - 1][j - 1] + prices[i]);
      res = Math.max(res, no[i][j]);
    }
  }
  return res;
}
// @lc code=end
console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]));
