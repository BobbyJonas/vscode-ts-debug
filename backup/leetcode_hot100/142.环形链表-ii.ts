/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
 */

class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// @lc code=start

function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast !== null) {
    slow = slow?.next ?? null;
    if (fast.next !== null) {
      fast = fast.next.next;
    } else {
      return null;
    }
    if (fast === slow) {
      let ptr: ListNode | null = head;
      while (ptr !== slow) {
        ptr = ptr?.next ?? null;
        slow = slow?.next ?? null;
      }
      return ptr;
    }
  }
  return null;
}
// @lc code=end
