/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || k <= 0) return head;
  let newHead: ListNode | null = {
    val: Infinity,
    next: head,
  };
  let newEnd: ListNode | null = head;
  let num = 1;
  while (newEnd.next) {
    newEnd = newEnd?.next;
    num++;
  }
  for (let i = 1; i <= num - (k % num); i++) {
    const headNode: ListNode | null = newHead?.next;
    newHead = {
      val: Infinity,
      next: headNode?.next || null,
    };
    if (headNode) headNode.next = null;
    if (newEnd) {
      newEnd.next = headNode ?? null;
      newEnd = newEnd.next;
    }
  }
  return newHead?.next || null;
}
// @lc code=end
