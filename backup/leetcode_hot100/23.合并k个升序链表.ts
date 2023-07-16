/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let continueFlag = true;
  const newHead: ListNode | null = {
    val: Infinity,
    next: null,
  };
  let pHead = newHead;
  while (continueFlag) {
    continueFlag = false;
    let minNodeIndex: number = -1;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i]) {
        continueFlag = true;
        if (minNodeIndex === -1) minNodeIndex = i;
        if (Number(lists[i]?.val) < Number(lists[minNodeIndex]?.val)) minNodeIndex = i;
      }
    }
    if (minNodeIndex >= 0) {
      pHead.next = {
        val: Number(lists[minNodeIndex]?.val),
        next: null,
      };
      pHead = pHead.next;
      // eslint-disable-next-line no-param-reassign
      lists[minNodeIndex] = lists[minNodeIndex]?.next || null;
    }
  }
  return newHead.next;
}
// @lc code=end
mergeKLists([null]);
