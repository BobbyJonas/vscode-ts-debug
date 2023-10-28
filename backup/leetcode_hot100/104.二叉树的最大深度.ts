/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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

function maxDepth(root: TreeNode | null): number {
  let res: number = 0;
  function treeRecursion(currentNode: TreeNode | null, depth: number): void {
    if (!currentNode) {
      if (depth > res) res = depth;
      return;
    }
    treeRecursion(currentNode.left, depth + 1);
    treeRecursion(currentNode.right, depth + 1);
  }
  treeRecursion(root, 0);
  return res;
}
// @lc code=end
