/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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

function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  function recursion(current: TreeNode | null): void {
    if (!current) return;
    res.push(current.val);
    recursion(current.left);
    recursion(current.right);
  }
  recursion(root);
  return res;
}
// @lc code=end
