/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
  function treeRecursion(leftSub: TreeNode | null, rightSub: TreeNode | null): boolean {
    if ((leftSub || rightSub) && !(leftSub && rightSub)) return false;
    if (!leftSub && !rightSub) return true;
    if (leftSub?.val !== rightSub?.val) return false;
    if (!treeRecursion(leftSub?.right ?? null, rightSub?.left ?? null)) return false;
    if (!treeRecursion(leftSub?.left ?? null, rightSub?.right ?? null)) return false;
    return true;
  }
  return treeRecursion(root?.left ?? null, root?.right ?? null);
}
// @lc code=end
