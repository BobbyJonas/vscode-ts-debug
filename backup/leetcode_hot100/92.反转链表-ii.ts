/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  let queue: (ListNode | null)[] = [];
  function searchNode(startNode: ListNode | null, target: number, note?: boolean): ListNode | null {
    let res: ListNode | null = startNode;
    let count: number = 1;
    queue = [startNode];
    if (!res) return null;
    while (count < target && res?.next) {
      queue.push(res.next);
      res = res.next;
      count++;
    }
    return res;
  }
  const res: ListNode | null = head;
  if (left === right) return head;
  const startNode = searchNode(head, left);
  const endNode = searchNode(startNode, right - left + 1, true);
  for (let i = 0; i < queue.length / 2; i++) {
    const t = (queue[i] as ListNode).val;
    (queue[i] as ListNode).val = (queue[queue.length - 1 - i] as ListNode).val;
    (queue[queue.length - 1 - i] as ListNode).val = t;
  }
  return res;
}
// @lc code=end
