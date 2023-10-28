/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @lc app=leetcode.cn id=116 lang=typescript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start

// class TreeNode2 {
//   val: number;

//   left: TreeNode2 | null;

//   right: TreeNode2 | null;

//   next: TreeNode2 | null;

//   constructor(val?: number, left?: TreeNode2, right?: TreeNode2, next?: TreeNode2) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//     this.next = next === undefined ? null : next;
//   }
// }

function connect(root: TreeNode2 | null): TreeNode2 | null {
  if (!root) return null;
  const queue: (TreeNode2 | null)[] = [root, null];
  while (queue.length > 0) {
    const currentNode: TreeNode2 | null = queue.shift() ?? null;
    if (currentNode) {
      if (currentNode?.left) queue.push(currentNode.left);
      if (currentNode?.right) queue.push(currentNode.right);
      (currentNode as TreeNode2).next = queue[0];
    } else if (queue.length > 0) queue.push(null);
  }
  return root;
}
// @lc code=end
