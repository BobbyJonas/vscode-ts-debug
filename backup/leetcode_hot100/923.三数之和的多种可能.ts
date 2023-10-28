/* eslint-disable no-plusplus */
/*
 * @lc app=leetcode.cn id=923 lang=typescript
 *
 * [923] 三数之和的多种可能
 */

// @lc code=start
function threeSumMulti(arr: number[], target: number): number {
  const numMap: Record<number, number> = {};
  for (let i = 0; i < arr.length; i++) {
    numMap[arr[i]] = (numMap[arr[i]] ?? 0) + 1;
  }

  const nums = Object.keys(numMap)
    .map(Number)
    .sort((a, b) => a - b);

  const plusMap: Record<number, Array<number>> = {};

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (!plusMap[nums[i] + nums[j]]) plusMap[nums[i] + nums[j]] = [];
      for (let k = 0; k < (numMap[nums[i]] * numMap[nums[j]] ?? 0); k++)
        plusMap[nums[i] + nums[j]].push(Math.max(nums[i], nums[j]));
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const p = (numMap[nums[i]] * (numMap[nums[i]] - 1)) / 2;
    if (p > 0) {
      if (!plusMap[nums[i] * 2]) plusMap[nums[i] * 2] = [];
      for (let k = 0; k < p; k++) plusMap[nums[i] * 2].push(nums[i]);
    }
  }

  let res = 0;
  Object.keys(plusMap).forEach((num) => {
    const a = target - +num;
    if (numMap[a]) {
      res += (plusMap[+num]?.filter((item) => item < a)?.length ?? 0) * numMap[target - +num];
      if (numMap[a] > 1) {
        const b = a;
        const c = target - a - b;
        if (!numMap[c] || !(a >= c)) return;
        if (b !== c) {
          res += ((numMap[a] * (numMap[a] - 1)) / 2) * numMap[c];
        } else {
          res += (numMap[a] * (numMap[a] - 1) * (numMap[a] - 2)) / (2 * 3);
          res %= 10 ** 9 + 7;
        }
      }
    }
  });
  return res;
}
// @lc code=end

console.log(threeSumMulti([1, 1, 2, 2, 2, 2], 5));
