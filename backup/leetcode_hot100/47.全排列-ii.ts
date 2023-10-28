/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  const res: string[] = [];
  function recursion(index: number, current: number[]): void {
    if (index >= nums.length) {
      const newItem = current.map((item) => nums[item]).join(',');
      if (!res.includes(newItem)) res.push(newItem);
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (!current.includes(i)) {
          current.push(i);
          recursion(index + 1, current);
          current.pop();
        }
      }
    }
  }
  recursion(0, []);
  return res.map((item) => {
    const newItemStr = item.split(',');
    const newItemNumber = [];
    for (let i = 0; i < newItemStr.length; i++) {
      newItemNumber.push(Number(newItemStr[i]));
    }
    return newItemNumber;
  });
}
// @lc code=end
