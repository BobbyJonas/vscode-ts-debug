/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;
  function treeRecursion(currentNode: TreeNode | null, currentDepth: number): number {
    if (!currentNode) return currentDepth;
    const left = treeRecursion(currentNode.left, currentDepth + 1);
    if (left === -1) return -1;
    const right = treeRecursion(currentNode.right, currentDepth + 1);
    if (right === -1) return -1;
    if (Math.abs(right - left) <= 1) {
      return Math.max(left, right);
    }
    return -1;
  }

  return treeRecursion(root, 0) !== -1;
}
// @lc code=end
