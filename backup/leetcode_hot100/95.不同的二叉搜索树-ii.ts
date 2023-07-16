/* eslint-disable no-debugger */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=95 lang=typescript
 *
 * [95] 不同的二叉搜索树 II
 */

class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
// @lc code=start

function buildTree(low: number, high: number): Array<TreeNode | null> {
  if (low > high) return [null];
  const result: Array<TreeNode | null> = [];
  for (let r = low; r <= high; r++) {
    const lNodes = buildTree(low, r - 1);
    const rNodes = buildTree(r + 1, high);
    lNodes.forEach((ln) => {
      rNodes.forEach((rn) => {
        result.push({
          val: r,
          left: ln,
          right: rn,
        });
      });
    });
  }
  return result;
}

function generateTrees(n: number): Array<TreeNode | null> {
  return buildTree(1, n);
}
// @lc code=end
generateTrees(5);
