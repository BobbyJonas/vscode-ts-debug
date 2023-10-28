/*
 * @lc app=leetcode.cn id=129 lang=typescript
 *
 * [129] 求根节点到叶节点数字之和
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

function sumNumbers(root: TreeNode | null): number {
  let res = 0;
  function treeRecursion(currentNode: TreeNode, value: number): void {
    if (!currentNode.left && !currentNode.right) {
      res += value;
      return;
    }
    if (currentNode.left) treeRecursion(currentNode.left, value * 10 + currentNode.left.val);
    if (currentNode.right) treeRecursion(currentNode.right, value * 10 + currentNode.right.val);
  }
  if (!root) return 0;
  treeRecursion(root, root.val);
  return res;
}
// @lc code=end
