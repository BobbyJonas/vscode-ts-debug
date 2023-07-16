/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
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

function sortList(head: ListNode | null): ListNode | null {
  function merge(a: ListNode | null, b: ListNode | null): ListNode | null {
    const _dummyHead: ListNode = {
      val: -Infinity,
      next: null,
    };
    let currentA: ListNode | null = a;
    let currentB: ListNode | null = b;
    let current = _dummyHead;
    while (currentA && currentB) {
      if (currentA.val < currentB.val) {
        current.next = currentA;
        currentA = currentA.next;
      } else {
        current.next = currentB;
        currentB = currentB.next;
      }
      current = current.next;
    }
    while (currentA) {
      current.next = currentA;
      currentA = currentA.next;
      current = current.next;
    }
    while (currentB) {
      current.next = currentB;
      currentB = currentB.next;
      current = current.next;
    }
    return _dummyHead.next;
  }

  function sort(_head: ListNode | null): ListNode | null {
    if (!_head?.next || !_head) return _head;
    let mid: ListNode | null = _head;
    for (
      let current: ListNode | null = _head?.next?.next ?? null;
      current;
      current = current.next?.next ?? null
    ) {
      mid = mid?.next ?? null;
    }
    if (mid) {
      const midNext = mid.next;
      mid.next = null;
      return merge(sort(_head), sort(midNext));
    }
    return _head;
  }

  return sort(head);
}
// @lc code=end
console.log(sortList({ val: 4, next: { val: 2, next: { val: 1, next: { val: 3, next: null } } } }));
