/*
 * @lc app=leetcode.cn id=123 lang=typescript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  const dp: number[][] = [];
  let res: number = 0;
  for (let i = 0; i < prices.length; i++) {
    if (!dp[i]) dp[i] = [];
    dp[i][0] = -Infinity;
    dp[i][1] = 0;
    dp[i][2] = -Infinity;
  }
  dp[0][0] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
    res = Math.max(dp[i][1], res);
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] - prices[i]);
    res = Math.max(dp[i][2] + prices[i], res);
  }
  return res;
}
// @lc code=end
