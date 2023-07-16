/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
 */

// class ListNode {
//   val: number;

//   next: ListNode | null;

//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }
// @lc code=start

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  function getLength(_head: ListNode | null): number {
    let __head = _head;
    let len = 0;
    while (__head) {
      len++;
      __head = __head.next;
    }
    return len;
  }
  const lenA = getLength(headA);
  const lenB = getLength(headB);
  let _headA = headA;
  let _headB = headB;
  let lenMinus = lenA - lenB;
  while (lenMinus !== 0) {
    if (lenMinus > 0) {
      _headA = _headA?.next ?? null;
      lenMinus--;
    } else {
      _headB = _headB?.next ?? null;
      lenMinus++;
    }
  }
  while (_headA && _headB) {
    if (_headA === _headB) return _headA;
    _headA = _headA.next ?? null;
    _headB = _headB.next ?? null;
  }
  return null;
}
// @lc code=end
