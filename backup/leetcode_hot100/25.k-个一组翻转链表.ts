/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const resultNode: ListNode = {
    val: Infinity,
    next: head,
  };
  let startNodeBefore: ListNode = resultNode;
  let startNode: ListNode | null = head;
  let counter = 0;
  const nodeQueue: ListNode[] = [];
  while (startNode) {
    nodeQueue.push(startNode);
    counter++;
    if (counter === k) {
      const nextNode = startNode.next;
      if (startNodeBefore?.next) {
        startNodeBefore.next = startNode;
      }
      for (let i1 = nodeQueue.length - 2; i1 >= 0; i1--) {
        nodeQueue[i1 + 1].next = nodeQueue[i1];
      }
      nodeQueue[0].next = nextNode;
      [startNodeBefore] = nodeQueue;
      startNode = nextNode;
      counter = 0;
      while (nodeQueue.length > 0) nodeQueue.pop();
    } else {
      startNode = startNode?.next || null;
    }
  }
  return resultNode.next;
}
// @lc code=end

reverseKGroup(null, 2);
