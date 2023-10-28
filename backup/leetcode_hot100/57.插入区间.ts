/*
 * @lc app=leetcode.cn id=57 lang=typescript
 *
 * [57] 插入区间
 */

// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
  const res: number[][] = [];
  while (intervals?.length > 0 && !(intervals[0]?.length > 0)) intervals.shift();
  if (intervals.length === 0) return [newInterval];
  if (newInterval[1] < intervals[0][0]) return [newInterval, ...intervals];
  if (newInterval[0] < intervals[0][0] && newInterval[1] > intervals[0][1]) return [newInterval];

  let currentStart = newInterval[0] < intervals[0][0] ? newInterval[0] : intervals[0][0];
  let currentEnd = newInterval[1] <= intervals[0][1] ? intervals[0][1] : -1;

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[0] > intervals?.[i - 1]?.[1] && newInterval[1] < intervals[i][0])
      res.push(newInterval);
    if (newInterval[1] < intervals[i][0] || newInterval[0] > intervals[i][1]) {
      if (currentEnd >= 0) res.push([currentStart, currentEnd]);
      res.push(intervals[i]);
      [currentStart] = intervals[i];
      currentEnd = -1;
    } else {
      if (currentEnd < 0)
        currentStart = newInterval[0] < intervals[i][0] ? newInterval[0] : intervals[i][0];
      currentEnd = newInterval[1] > intervals[i][1] ? newInterval[1] : intervals[i][1];
    }
  }
  if (currentEnd >= 0) res.push([currentStart, currentEnd]);
  if (newInterval[0] > intervals[intervals.length - 1][1]) res.push(newInterval);
  return res;
}
// @lc code=end
console.log(insert([[1, 5]], [0, 6]));
