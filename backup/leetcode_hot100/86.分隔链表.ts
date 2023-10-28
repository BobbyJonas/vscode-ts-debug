/* eslint-disable no-continue */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
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

function partition(head: ListNode | null, x: number): ListNode | null {
  function deleteAndInsertPrevNode(head1: ListNode, head2: ListNode): void {
    const head1Next = head1.next;
    const head2Next = head2.next;
    head2.next = head2.next?.next || null;
    if (head2Next) head2Next.next = null;
    head1.next = head2Next;
    if (head2Next) head2Next.next = head1Next;
  }
  // function swapPrevNode(head1: ListNode, head2: ListNode): void {
  //   const head1Next = head1.next;
  //   const head1NextNext = head1.next?.next;
  //   const head2Next = head2.next;
  //   const head2NextNext = head2.next?.next;
  //   if (head1.next?.next === head2.next) {
  //     head1.next = head2Next;
  //     if (head1.next) head1.next.next = head1Next;
  //     if (head2) head2.next = head2NextNext || null;
  //   } else if (head2.next?.next === head1.next) {
  //     head2.next = head1Next;
  //     if (head2.next) head2.next.next = head2Next;
  //     if (head1) head1.next = head1NextNext || null;
  //   } else {
  //     head1.next = head2Next;
  //     if (head1.next) head1.next.next = head1NextNext || null;
  //     head2.next = head1Next;
  //     if (head2.next) head2.next.next = head2NextNext || null;
  //   }
  // }
  const realHead: ListNode | null = {
    val: Infinity,
    next: head,
  };
  function findSmallerPrevNode(inputNode: ListNode): ListNode | null {
    let _head: ListNode | null = realHead;
    const flag = false;
    while (_head?.next) {
      if (inputNode === _head.next) break;
      if (_head.next.val >= x) return _head;
      _head = _head.next;
    }
    return null;
  }
  let _head: ListNode | null = realHead;
  while (_head) {
    if (_head.next && Number(_head.next.val) < x) {
      const smallNode: ListNode | null = _head.next ? findSmallerPrevNode(_head.next) : null;
      if (_head !== realHead && smallNode && smallNode !== _head) {
        deleteAndInsertPrevNode(smallNode, _head);
        _head = smallNode.next;
        continue;
      }
    }
    _head = _head.next || null;
  }
  return realHead.next;
}
// @lc code=end
const head1: ListNode = {
  val: 1,
  next: {
    val: 4,
    next: {
      val: 3,
      next: {
        val: 0,
        next: {
          val: 2,
          next: {
            val: 5,
            next: {
              val: 2,
              next: null,
            },
          },
        },
      },
    },
  },
};
console.log(partition(head1, 3));
