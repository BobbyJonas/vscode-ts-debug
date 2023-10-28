/*
 * @lc app=leetcode.cn id=434 lang=typescript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
function countSegments(s: string): number {
  let sum = 0;
  let index = -1;
  s += ' ';
  do {
    const nextIndex = s.indexOf(' ', index + 1);
    if (nextIndex > index + 1) sum++;
    index = nextIndex;
  } while (index >= 0);
  return sum;
}
// @lc code=end
console.log(countSegments('Hello, my name is John'));
