/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

function isValidBST(root: TreeNode | null): boolean {
  function validateSubTree(currentNode: TreeNode | null, low: number, high: number): boolean {
    if (!currentNode) return true;
    if (currentNode.val <= low || currentNode.val >= high) return false;
    if (currentNode.left)
      if (!validateSubTree(currentNode.left, low, Math.min(high, currentNode.val))) return false;
    if (currentNode.right)
      if (!validateSubTree(currentNode.right, Math.max(low, currentNode.val), high)) return false;
    return true;
  }
  return validateSubTree(root, -Infinity, Infinity);
}
// @lc code=end
