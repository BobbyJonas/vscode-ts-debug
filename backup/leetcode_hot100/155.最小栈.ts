/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
interface StackNode {
  val: number;
  right: StackNode | null;
}
class MinStack {
  stack: Array<StackNode> = [];

  min: StackNode | null = null;

  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    const newNode: StackNode = {
      val,
      right: null,
    };
    this.stack.push(newNode);
    if (this.stack.length <= 1) {
      this.min = newNode;
      return;
    }
    if (this.min && val <= this.min.val) {
      newNode.right = this.min;
      this.min = newNode;
    }
  }

  pop(): void {
    const popNode = this.stack.pop();
    if (popNode?.right) {
      this.min = popNode.right;
    }
  }

  top(): number {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1].val;
    }
    return NaN;
  }

  getMin(): number {
    return this.min?.val ?? NaN;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();
minStack.pop();
minStack.top();
minStack.getMin();
