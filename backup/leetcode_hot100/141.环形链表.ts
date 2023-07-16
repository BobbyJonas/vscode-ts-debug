/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

function hasCycle(head: ListNode | null): boolean {
  let current1: ListNode | null = head;
  let current2: ListNode | null = head;
  while (current2 !== null) {
    current1 = current1.next || null;
    current2 = current2.next?.next || null;
    if (current1 === current2 && current2 !== null) return true;
  }
  return false;
}
// @lc code=end
