/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  function min(a: number, b: number) {
    if (a < b) return a;
    return b;
  }
  let i = 0;
  let j = height.length - 1;
  let res = 0;
  while (i <= j) {
    const area = min(height[i], height[j]) * (j - i);
    if (area > res) res = area;
    if (height[i] < height[j]) i++;
    else j--;
  }
  return res;
}
// @lc code=end

console.log(maxArea([4, 3, 2, 1, 4]));
