/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  const mapRules: any = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  if (!digits) return [];
  const res: string[] = [];
  function recursion(index: number, current: string): void {
    if (index >= digits.length) {
      res.push(current);
    } else {
      for (let i = 0; i < mapRules[digits[index]].length; i++) {
        recursion(index + 1, current + mapRules[digits[index]][i]);
      }
    }
  }
  recursion(0, '');
  return res;
}
// @lc code=end

console.log(letterCombinations('23'));
