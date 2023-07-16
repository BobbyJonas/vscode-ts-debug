/*
 * @lc app=leetcode.cn id=96 lang=typescript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
function numTrees(n: number): number {
  const current: number[] = [];
  function buildTree(low: number, high: number): number {
    if (low > high) return 1;
    let result: number = 0;
    for (let r = low; r <= high; r++) {
      const range1 = r - low;
      const range2 = high - r;
      const lNodes = current[range1] ?? buildTree(low, r - 1);
      current[range1] = lNodes;
      const rNodes = current[range2] ?? buildTree(r + 1, high);
      current[range2] = rNodes;
      result += lNodes * rNodes;
    }
    return result;
  }
  return buildTree(1, n);
}
// @lc code=end
console.log(numTrees(3));
