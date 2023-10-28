/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  function treeRecursion(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
    if ((tree1 || tree2) && !(tree1 && tree2)) return false;
    if (!tree1 && !tree2) return true;
    if (tree1?.val !== tree2?.val) return false;
    if (!treeRecursion(tree1?.left ?? null, tree2?.left ?? null)) return false;
    if (!treeRecursion(tree1?.right ?? null, tree2?.right ?? null)) return false;
    return true;
  }
  return treeRecursion(p, q);
}
// @lc code=end
