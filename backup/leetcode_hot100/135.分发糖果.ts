/* eslint-disable no-continue */
/*
 * @lc app=leetcode.cn id=135 lang=typescript
 *
 * [135] 分发糖果
 */

// @lc code=start
function candy(ratings: number[]): number {
  const left: number[] = [1];
  const right: number[] = [];
  for (let i = 1; i < ratings.length; i++)
    left[i] = ratings[i] > ratings[i - 1] ? left[i - 1] + 1 : 1;
  let count = left[ratings.length - 1];
  right[ratings.length - 1] = 1;
  for (let i = ratings.length - 2; i >= 0; i--) {
    right[i] = ratings[i] > ratings[i + 1] ? right[i + 1] + 1 : 1;
    count += Math.max(left[i], right[i]);
  }
  return count;
}
// @lc code=end
console.log(candy([1, 2, 1]));
