/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const _head: ListNode | null = head;
  let current: ListNode | null = head;
  let current_n_before: ListNode | null = null;

  let i = 0;
  do {
    i++;
    current = current?.next || null;
    if (!current && current_n_before?.next) {
      current_n_before.next = current_n_before.next.next || null;
      return _head;
    }
    if (i === n) current_n_before = _head;
    if (i > n) current_n_before = current_n_before?.next || null;
  } while (current);

  if (i === n) {
    return head?.next || null;
  }

  return _head;
}
// @lc code=end
