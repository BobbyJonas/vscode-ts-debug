/*
 * @lc app=leetcode.cn id=164 lang=typescript
 *
 * [164] 最大间距
 */

// @lc code=start
function maximumGap(nums: number[]): number {
  if (nums.length < 2) return 0;
  let radix = 0;
  const radixArr: number[] = [...nums];
  let repeatFlag: boolean = false;
  do {
    repeatFlag = false;
    const currentArr: number[][] = [];
    for (let i = 0; i < radixArr.length; i++) {
      const k = Math.floor(radixArr[i] / 10 ** radix) % 10;
      if (radixArr[i] / 10 ** radix >= 1) repeatFlag = true;
      if (!currentArr[k]) currentArr[k] = [];
      currentArr[k].push(radixArr[i]);
    }
    let i = 0;
    currentArr.forEach((itemArr) =>
      itemArr.forEach((item) => {
        radixArr[i++] = item;
      })
    );
    radix++;
  } while (repeatFlag);
  let ans = 0;
  for (let i = 1; i < radixArr.length; i++) {
    ans = Math.max(ans, radixArr[i] - radixArr[i - 1]);
  }
  return ans;
}
// @lc code=end
maximumGap([1, 10000000]);
