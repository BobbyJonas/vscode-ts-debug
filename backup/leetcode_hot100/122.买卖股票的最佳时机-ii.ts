/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let buy: number = prices[0];
  let sell: number = -Infinity;
  let res: number = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy || prices[i] < sell) {
      if (sell !== -Infinity) res += sell - buy;
      buy = prices[i];
      sell = -Infinity;
    } else {
      sell = Math.max(sell, prices[i]);
    }
  }
  if (sell !== -Infinity) res += sell - buy;
  return res;
}
// @lc code=end
console.log(maxProfit([1, 2, 3, 4, 5]));
