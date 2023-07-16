/*
 * @lc app=leetcode.cn id=134 lang=typescript
 *
 * [134] 加油站
 */

// @lc code=start
function canCompleteCircuit(gas: number[], cost: number[]): number {
  const len = gas.length;
  let spare = 0;
  let minSpare = Number.MAX_SAFE_INTEGER;
  let minIndex = 0;

  for (let i = 0; i < len; i++) {
    spare += gas[i] - cost[i];
    if (spare < minSpare) {
      minSpare = spare;
      minIndex = i;
    }
  }

  return spare < 0 ? -1 : (minIndex + 1) % len;
}
// @lc code=end
console.log(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6]));
