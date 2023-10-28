/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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

function minDepth(root: TreeNode | null): number {
  let min = Infinity;
  if (!root) return 0;
  function treeRecursion(currentNode: TreeNode | null, currentDepth: number): void {
    if (!currentNode?.left && !currentNode?.right) {
      min = Math.min(min, currentDepth);
    }
    if (currentNode?.left) treeRecursion(currentNode.left, currentDepth + 1);
    if (currentNode?.right) treeRecursion(currentNode.right, currentDepth + 1);
  }
  treeRecursion(root, 1);
  return min;
}
// @lc code=end
