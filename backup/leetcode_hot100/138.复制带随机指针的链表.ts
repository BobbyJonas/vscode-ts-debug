/*
 * @lc app=leetcode.cn id=138 lang=typescript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start

const hash = new Map();
function copyRandomList(head: Node | null): Node | null {
  if (!head) return null;
  return createNode(head);
}

function createNode(node: Node): Node {
  const newNode = new Node(node.val);
  hash.set(node, newNode);
  if (node.next) newNode.next = createNode(node.next);
  if (node.random) newNode.random = hash.get(node.random);
  return newNode;
}

// @lc code=end
