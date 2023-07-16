/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  function treeRecursion(currentNode: TreeNode | null, currentNum: number): boolean {
    if (!currentNode?.left && !currentNode?.right) return currentNum === targetSum;
    if (currentNode?.left)
      if (treeRecursion(currentNode.left, currentNum + currentNode.left.val)) return true;
    if (currentNode?.right)
      if (treeRecursion(currentNode.right, currentNum + currentNode.right.val)) return true;
    return false;
  }

  return treeRecursion(root, root.val);
}
// @lc code=end
