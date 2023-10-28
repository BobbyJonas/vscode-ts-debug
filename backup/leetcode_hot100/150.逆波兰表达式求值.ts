/* eslint-disable no-case-declarations */
/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const symbolCalc = ['+', '-', '*', '/'];
  for (let i = 0; i < tokens.length; i++) {
    if (!symbolCalc.includes(tokens[i])) {
      stack.push(parseInt(tokens[i], 10));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      switch (tokens[i]) {
        case '+':
          if (a !== undefined && b !== undefined) stack.push(a + b);
          break;
        case '-':
          if (a !== undefined && b !== undefined) stack.push(a - b);
          break;
        case '*':
          if (a !== undefined && b !== undefined) stack.push(a * b);
          break;
        case '/':
          if (a !== undefined && b !== undefined) stack.push(Math.trunc(a / b));
          break;
        default:
          break;
      }
    }
  }
  return stack[0];
}
// @lc code=end

console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']));
