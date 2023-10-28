/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-classes-per-file */
/*
 * @lc app=leetcode.cn id=109 lang=typescript
 *
 * [109] 有序链表转换二叉搜索树
 */

class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

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

function sortedListToBST(head: ListNode | null): TreeNode | null {
  function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (!(nums?.length > 0)) return null;
    const mid = Math.floor(nums.length / 2);
    return {
      val: nums[mid],
      left: sortedArrayToBST(nums.slice(0, mid)),
      right: sortedArrayToBST(nums.slice(mid + 1)),
    };
  }
  let _head = head;
  const queue: number[] = [];
  while (_head) {
    queue.push(_head.val);
    _head = _head.next;
  }

  return sortedArrayToBST(queue);
}
// @lc code=end
