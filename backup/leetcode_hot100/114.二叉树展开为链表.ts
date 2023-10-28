/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=114 lang=typescript
 *
 * [114] 二叉树展开为链表
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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  function insertNext(currentNode: TreeNode, insertNode: TreeNode): void {
    const nextNode = currentNode.right;
    currentNode.right = insertNode;
    let insertNodeLast = insertNode;
    while (insertNodeLast.right) {
      insertNodeLast = insertNodeLast.right;
    }
    insertNodeLast.right = nextNode;
  }

  let currentNode = root;
  while (currentNode) {
    if (currentNode?.left) {
      insertNext(currentNode, currentNode.left);
    }
    currentNode = currentNode.right;
  }

  currentNode = root;
  while (currentNode) {
    currentNode.left = null;
    currentNode = currentNode.right;
  }
}
// @lc code=end
