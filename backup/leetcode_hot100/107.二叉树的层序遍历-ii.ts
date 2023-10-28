/*
 * @lc app=leetcode.cn id=107 lang=typescript
 *
 * [107] 二叉树的层序遍历 II
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

function levelOrderBottom(root: TreeNode | null): number[][] {
  const queue: Array<TreeNode | null> = [root, null];
  let current: number[] = [];
  const res: number[][] = [];
  if (!root) return res;

  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (currentNode) {
      current.push(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    } else {
      res.push(JSON.parse(JSON.stringify(current)));
      current = [];
      if (queue.length > 0) queue.push(null);
    }
  }
  return res.reverse();
}
// @lc code=end
