/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let min = prices[0];
  let res = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min >= 0) res = Math.max(res, prices[i] - min);
    min = Math.min(min, prices[i]);
  }
  return res;
}
// @lc code=end
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
