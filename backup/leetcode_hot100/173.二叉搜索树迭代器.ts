/* eslint-disable max-classes-per-file */
/*
 * @lc app=leetcode.cn id=173 lang=typescript
 *
 * [173] 二叉搜索树迭代器
 */

class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
// @lc code=start

class BSTIterator {
  #stack: Array<TreeNode> = [];

  #treeRecursion(current: TreeNode | null): void {
    if (!current) return;
    this.#treeRecursion(current.left);
    this.#stack.push(current);
    this.#treeRecursion(current.right);
  }

  constructor(root: TreeNode | null) {
    this.#treeRecursion(root);
    if (this.#stack.length > 0) {
      let min = this.#stack[0];
      for (let i = 1; i < this.#stack.length; i++) {
        if (this.#stack[i].val < min.val) {
          min = this.#stack[i];
        }
      }
      while (this.#stack.length > 0 && this.#stack[0] !== min) this.#stack.shift();
    }
  }

  next(): number {
    if (this.#stack.length === 0) return NaN;
    return this.#stack.shift()?.val ?? NaN;
  }

  hasNext(): boolean {
    return this.#stack.length > 0;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end
