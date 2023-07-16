/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let newHead: ListNode | null = {
    val: Infinity,
    next: null,
  };
  const _head = newHead;
  let _l1 = l1;
  let _l2 = l2;
  while (_l1 || _l2) {
    if (_l1 && _l2) {
      if (_l1.val > _l2.val) {
        newHead.next = _l2;
        _l2 = _l2.next;
      } else {
        newHead.next = _l1;
        _l1 = _l1.next;
      }
    } else if (_l1) {
      newHead.next = _l1;
      _l1 = _l1.next;
    } else {
      newHead.next = _l2;
      _l2 = _l2?.next || null;
    }
    if (newHead?.next) newHead = newHead.next;
  }
  return _head.next;
}
// @lc code=end
