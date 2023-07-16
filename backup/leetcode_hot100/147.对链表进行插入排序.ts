/*
 * @lc app=leetcode.cn id=147 lang=typescript
 *
 * [147] 对链表进行插入排序
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

function insertionSortList(head: ListNode | null): ListNode | null {
  const dummyHead: ListNode = {
    val: -Infinity,
    next: head,
  };
  let current: ListNode | null = dummyHead;
  while (current) {
    let cursor: ListNode | null = current;
    if (cursor) {
      for (let k: ListNode | null = cursor; k; k = k.next) {
        if (k.next && cursor.next && k.next.val < cursor.next.val) {
          cursor = k;
        }
      }
      if (cursor !== current) {
        const selectNode: ListNode | null = cursor.next;
        cursor.next = cursor.next?.next ?? null;
        if (selectNode) selectNode.next = null;
        const currentNext = current.next;
        current.next = selectNode;
        if (selectNode) selectNode.next = currentNext;
      }
    }
    current = current.next;
  }

  return dummyHead?.next;
}
// @lc code=end
console.log(
  insertionSortList({ val: 4, next: { val: 1, next: { val: 2, next: { val: 3, next: null } } } })
);
