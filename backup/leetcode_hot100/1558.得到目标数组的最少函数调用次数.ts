/* eslint-disable no-plusplus */
/*
 * @lc app=leetcode.cn id=1558 lang=typescript
 *
 * [1558] 得到目标数组的最少函数调用次数
 */

// @lc code=start
function minOperations(nums: number[]): number {
  let current = [...nums];
  let substractIndexList: number[] = [];
  let allZero = true;
  let res = 0;

  do {
    allZero = true;
    substractIndexList = [];
    for (let i = 0; i < current.length; i++) {
      if (current[i] !== 0) allZero = false;
      if (current[i] % 2 === 1) substractIndexList.push(i);
    }
    if (allZero) return res;
    if (substractIndexList.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-loop-func
      substractIndexList.forEach((subIndex) => {
        current[subIndex]--;
        res++;
      });
    } else {
      res++;
      current = current.map((item) => item / 2);
    }
  } while (!allZero);

  return res;
}
// @lc code=end
console.log(minOperations([1, 5]));
