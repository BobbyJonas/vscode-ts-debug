/*
 * @lc app=leetcode.cn id=133 lang=typescript
 *
 * [133] 克隆图
 */

// @lc code=start

// class Node2 {
//   val: number;

//   neighbors: Node2[];

//   constructor(val?: number, neighbors?: Node2[]) {
//     this.val = val === undefined ? 0 : val;
//     this.neighbors = neighbors === undefined ? [] : neighbors;
//   }
// }

function cloneGraph(node: Node2 | null): Node2 | null {
  const nodeHash: {
    [prop: number]: Node2;
  } = {};
  function recursion(current: Node2): Node2 {
    if (nodeHash[current.val]) return nodeHash[current.val];
    const cloneCurrent: Node2 = {
      val: current.val,
      neighbors: [],
    };
    nodeHash[current.val] = cloneCurrent;
    current.neighbors?.forEach((item) => {
      cloneCurrent.neighbors.push(recursion(item));
    });
    return cloneCurrent;
  }
  if (!node) return null;
  return recursion(node);
}
// @lc code=end
