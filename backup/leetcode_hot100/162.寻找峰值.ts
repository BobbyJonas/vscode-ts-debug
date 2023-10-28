/*
 * @lc app=leetcode.cn id=162 lang=typescript
 *
 * [162] 寻找峰值
 */

// @lc code=start
function findPeakElement(nums: number[]): number {
  const queue: Array<{ l: number; r: number }> = [{ l: 0, r: nums.length - 1 }];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current) {
      const { l, r } = current;
      const mid = Math.floor((l + r) / 2);
      if (nums[mid] > (nums[mid - 1] ?? -Infinity) && nums[mid] > (nums[mid + 1] ?? -Infinity))
        return mid;
      if (l < r) {
        queue.push({ l, r: mid });
        queue.push({ l: mid + 1, r });
      }
    }
  }
  return NaN;
}
// @lc code=end

console.log(11);
