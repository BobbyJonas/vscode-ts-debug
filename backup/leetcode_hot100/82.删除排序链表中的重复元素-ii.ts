/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
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

// class ListNode {
//   val: number;

//   next: ListNode | null;

//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const resHead: ListNode = {
    val: Infinity,
    next: null,
  };
  function getNextNode(originHead: ListNode | null): ListNode | null {
    const newHead: ListNode | null = {
      val: Infinity,
      next: originHead,
    };
    let _head: ListNode | null = newHead.next;
    let repeatFlag = false;
    while (_head?.next && _head?.val === _head?.next?.val) {
      _head = _head?.next;
      repeatFlag = true;
    }
    newHead.next = (repeatFlag ? _head?.next : _head) ?? null;
    return newHead.next ?? null;
  }
  let newHead: ListNode | null = resHead;
  let _head: ListNode | null = head;
  while (_head) {
    let _newHead: ListNode | null = _head;
    do {
      _newHead = getNextNode(_newHead);
    } while (_newHead?.next && _newHead?.val === _newHead?.next.val);
    if (newHead) newHead.next = _newHead;
    newHead = newHead?.next ?? null;
    _head = _newHead?.next ?? null;
  }
  return resHead.next;
}
// @lc code=end
const head: ListNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null,
            },
          },
        },
      },
    },
  },
};

console.log(deleteDuplicates(head));
