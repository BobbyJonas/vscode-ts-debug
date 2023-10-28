/*
 * @lc app=leetcode.cn id=124 lang=typescript
 *
 * [124] 二叉树中的最大路径和
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

function maxPathSum(root: TreeNode | null): number {
  let res: number = -Infinity;
  function treeRecursion(node: TreeNode | null): number {
    if (!node) return 0;
    const leftSum = treeRecursion(node.left);
    const rightSum = treeRecursion(node.right);
    res = Math.max(
      res,
      node.val,
      leftSum + node.val,
      rightSum + node.val,
      leftSum + rightSum + node.val
    );
    return Math.max(leftSum, rightSum, 0) + node.val;
  }
  treeRecursion(root);
  return res;
}
// @lc code=end
console.log(
  maxPathSum({
    val: 1,
    left: { val: -2, left: null, right: null },
    right: { val: 3, left: null, right: null },
  })
);
