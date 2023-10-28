/* eslint-disable operator-linebreak */
/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const hashMap: any = {};
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = (hashMap[nums[i]] || 0) + 1;
  }
  const origin = nums;
  for (let i = 0; i < origin.length - 1; i++) {
    for (let j = i + 1; j < origin.length; j++) {
      if (origin[i] > origin[j]) {
        const t = origin[i];
        origin[i] = origin[j];
        origin[j] = t;
      }
    }
  }
  const res: number[][] = [];
  for (let i = 0; i < origin.length; i++) {
    if (i < origin.length - 1 && origin[i] === origin[i + 1]) {
      console.log('no work');
    } else {
      let k = 0;
      while (k < i && origin[k] <= origin[i] && origin[i] <= -(origin[k] + origin[i])) {
        if (origin[k] !== origin[k - 1] && hashMap[-(origin[k] + origin[i])] > 0) {
          hashMap[origin[k]]--;
          hashMap[origin[i]]--;
          hashMap[-(origin[k] + origin[i])]--;
          if (
            hashMap[origin[k]] >= 0 &&
            hashMap[origin[i]] >= 0 &&
            hashMap[-(origin[k] + origin[i])] >= 0
          ) {
            res.push([origin[k], origin[i], -(origin[k] + origin[i])]);
          }
          hashMap[origin[k]]++;
          hashMap[origin[i]]++;
          hashMap[-(origin[k] + origin[i])]++;
        }
        k++;
      }
    }
  }

  // if (hashMap[0] > 0) {
  // }
  return res;
}
// @lc code=end
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(111);
