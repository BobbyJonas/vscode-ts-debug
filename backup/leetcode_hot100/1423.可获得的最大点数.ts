/* eslint-disable no-plusplus */
/*
 * @lc app=leetcode.cn id=1423 lang=typescript
 *
 * [1423] 可获得的最大点数
 */

// @lc code=start
function maxScore(cardPoints: number[], k: number): number {
  const prevSum: number[] = [cardPoints[0]];
  const lastSum: number[] = [];
  lastSum[cardPoints.length - 1] = cardPoints[cardPoints.length - 1];
  for (let i = 1; i < cardPoints.length; i++) {
    prevSum[i] = prevSum[i - 1] + cardPoints[i];
  }
  for (let i = cardPoints.length - 2; i >= 0; i--) {
    lastSum[i] = lastSum[i + 1] + cardPoints[i];
  }
  let res: number = -Infinity;
  for (let i = 0; i <= k; i++) {
    res = Math.max(res, (prevSum[i - 1] || 0) + (lastSum[cardPoints.length - (k - i)] || 0));
  }
  return res;
}
// @lc code=end
