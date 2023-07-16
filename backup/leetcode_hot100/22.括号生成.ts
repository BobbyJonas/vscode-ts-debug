/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  const queue: string[] = [];
  const result: string[] = [];
  function treeRecursion(depth: number, current: string) {
    if (current.length >= n * 2) {
      result.push(current);
    } else {
      if (depth < n) {
        queue.push('(');
        treeRecursion(depth + 1, `${current}(`);
        queue.pop();
      }
      if (queue[queue.length - 1] === '(') {
        queue.pop();
        treeRecursion(depth, `${current})`);
        queue.push('(');
      }
    }
  }
  treeRecursion(0, '');
  return result;
}
// @lc code=end

console.log(generateParenthesis(3));
