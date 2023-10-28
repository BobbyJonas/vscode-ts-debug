/*
 * @lc app=leetcode.cn id=99 lang=typescript
 *
 * [99] 恢复二叉搜索树
 */

class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// @lc code=start

/**
 Do not return anything, modify root in-place instead.
 */
function recoverTree(root: TreeNode | null): void {
  const queue: Array<TreeNode> = [];
  let problemNode: TreeNode = root as TreeNode;
  function searchTreeRecursion(currentNode: TreeNode | null): boolean {
    if (!currentNode) return true;
    if (!searchTreeRecursion(currentNode.left)) return false;
    queue.push(currentNode);
    if (queue.length >= 2 && queue[queue.length - 1].val < queue[queue.length - 2].val) {
      problemNode = queue[queue.length - 1];
    }
    if (!searchTreeRecursion(currentNode.right)) return false;
    return true;
  }

  searchTreeRecursion(root);
  for (let i = queue.length - 1; i >= 0; i--) {
    if (i > 0) {
      if (problemNode?.val > queue[i - 1]?.val) {
        const t = queue[i].val;
        queue[i].val = problemNode.val;
        problemNode.val = t;
        break;
      }
    } else if (i === 0) {
      const t = queue[0].val;
      queue[0].val = problemNode.val;
      problemNode.val = t;
    }
  }
}
// @lc code=end
console.log(
  recoverTree({
    val: 3,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: { val: 2, left: null, right: null },
      right: null,
    },
  })
);
