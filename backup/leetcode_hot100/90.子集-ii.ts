/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
  const current: number[] = [];
  const res: number[][] = [];
  const hashObj: {
    [num: number]: number;
  } = {};
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    if (!hashObj[currentValue]) hashObj[currentValue] = 0;
    hashObj[currentValue]++;
  }
  const keys = Object.keys(hashObj);

  function backtrack(currentKey: number): void {
    if (currentKey >= keys.length) {
      res.push(JSON.parse(JSON.stringify(current)));
      return;
    }
    const currentValue = Number(keys[currentKey]);
    for (let i = 0; i <= hashObj[currentValue]; i++) {
      for (let k = 1; k <= i; k++) {
        hashObj[currentValue]--;
        current.push(currentValue);
      }
      backtrack(currentKey + 1);
      for (let k = 1; k <= i; k++) {
        hashObj[currentValue]++;
        current.pop();
      }
    }
  }

  backtrack(0);
  return res;
}
// @lc code=end

console.log(subsetsWithDup([1, 2, 2]));
