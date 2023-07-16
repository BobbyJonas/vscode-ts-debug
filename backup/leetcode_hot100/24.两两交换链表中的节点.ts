/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
  let currentHead = head;
  let newHead0: ListNode | null = {
    val: Infinity,
    next: head,
  };
  const newHead = newHead0;

  let t = 0;
  let leftNode: ListNode | null = null;
  let rightNode: ListNode | null = null;
  let leftNode0: ListNode | null = null;
  let rightNode0: ListNode | null = null;

  while (currentHead) {
    if (t === 0) {
      leftNode = newHead0;
      leftNode0 = currentHead;
    } else if (t === 1) {
      rightNode = newHead0;
      rightNode0 = currentHead;
      t = 0;
      if (leftNode?.next && rightNode?.next) {
        const tempNodeNext: ListNode | null = rightNode0?.next || null;
        rightNode.next = leftNode0;
        leftNode.next = rightNode0;
        rightNode0.next = leftNode0;
        if (leftNode0?.next) leftNode0.next = tempNodeNext;
        currentHead = tempNodeNext;
        newHead0 = leftNode0;
        continue;
      }
    }
    t++;
    currentHead = currentHead?.next || null;
    newHead0 = newHead0?.next || null;
  }
  return newHead.next;
}
// @lc code=end
