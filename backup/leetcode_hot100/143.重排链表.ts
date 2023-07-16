/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=143 lang=typescript
 *
 * [143] 重排链表
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

/**
  Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  const queue: Array<ListNode> = [];
  function node2Queue(_head: ListNode | null): void {
    let current = _head;
    while (current) {
      queue.push(current);
      const currentNext = current.next;
      current.next = null;
      current = currentNext;
    }
  }
  node2Queue(head);
  const res: ListNode | null = {
    val: Infinity,
    next: null,
  };
  let current: ListNode = res;
  for (let i = 0; i < Math.floor(queue.length / 2); i++) {
    current.next = queue[i];
    current = current.next;
    current.next = queue[queue.length - i - 1];
    current = current.next;
  }
  if (queue.length % 2 === 1) current.next = queue[Math.floor(queue.length / 2)];
  head = res.next;
}
// @lc code=end
console.log(
  reorderList({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } })
);
