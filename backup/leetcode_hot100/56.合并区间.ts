/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  for (let i = 0; i < intervals.length - 1; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      if (
        intervals[i][0] > intervals[j][0] ||
        (intervals[i][0] === intervals[j][0] && intervals[i][1] > intervals[j][1])
      ) {
        const t = intervals[i];
        intervals[i] = intervals[j];
        intervals[j] = t;
      }
    }
  }
  const res: number[][] = [];
  let currentStart = intervals[0][0];
  let currentEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > currentEnd) {
      res.push([currentStart, currentEnd]);
      [currentStart, currentEnd] = intervals[i];
    } else if (intervals[i][1] > currentEnd) {
      [, currentEnd] = intervals[i];
    }
  }
  res.push([currentStart, currentEnd]);
  return res;
}
// @lc code=end
console.log(
  merge([
    [1, 4],
    [2, 3],
  ])
);
