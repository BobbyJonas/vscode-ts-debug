/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=84 lang=typescript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
function largestRectangleArea(heights: number[]): number {
  const stack: number[] = [];
  const l = heights.length;
  let res: number = 0;
  for (let i = 0; i < l; i++) {
    const popStack: number[] = [];
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      const left = stack.pop() ?? 0;
      popStack.push(left);
      const right = i;
      const current = (right - left) * heights[left];
      res = current > res ? current : res;
      heights[left] = heights[i];
    }
    stack.push(...popStack, i);
  }
  while (stack.length > 0) {
    const left = stack.pop() ?? 0;
    const right = l;
    const current = (right - left) * heights[left];
    res = current > res ? current : res;
  }
  return res;
}
// @lc code=end
console.log(largestRectangleArea([2, 1, 2]));
