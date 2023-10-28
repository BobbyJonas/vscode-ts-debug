/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  let current: number[] = [];
  const res: number[][] = [];
  if (!root) return res;
  const queue: (TreeNode[] | null)[] = [[root], null];

  let direction: boolean = false;

  while (queue.length > 0) {
    let currentNodeArr = queue.shift();

    if (currentNodeArr) {
      const nextNodeList = [];
      if (direction) currentNodeArr = currentNodeArr?.reverse();
      for (let i = 0; i < currentNodeArr.length; i++) {
        const nodeItem = currentNodeArr[i];
        current.push(nodeItem.val);
        if (!direction) {
          if (nodeItem.left) nextNodeList.push(nodeItem.left);
          if (nodeItem.right) nextNodeList.push(nodeItem.right);
        } else {
          if (nodeItem.right) nextNodeList.push(nodeItem.right);
          if (nodeItem.left) nextNodeList.push(nodeItem.left);
        }
      }
      if (nextNodeList.length > 0) queue.push(direction ? nextNodeList.reverse() : nextNodeList);
      direction = !direction;
    } else {
      res.push(JSON.parse(JSON.stringify(current)));
      current = [];
      if (queue.length > 0) queue.push(null);
    }
  }
  return res;
}
// @lc code=end
