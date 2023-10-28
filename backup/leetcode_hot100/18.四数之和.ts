/* eslint-disable operator-linebreak */
/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
  function diffPush(origin: number[][], pushArr: number[]): void {
    const diffArr = pushArr;
    diffArr.sort((a, b) => a - b);
    let diffFlag = true;
    for (let i = 0; i < origin.length; i++) {
      let currentFlag = false;
      for (let k = 0; k < pushArr.length; k++) {
        if (diffArr[k] !== origin[i][k]) {
          currentFlag = true;
          break;
        }
      }
      if (!currentFlag) {
        diffFlag = false;
        break;
      }
    }
    if (diffFlag) {
      origin.push(diffArr);
    }
  }
  const binaryPlusHash: any = {};
  const numCountHash: {
    [prop: string]: number;
  } = {};
  const sortNums = nums;
  for (let i = 0; i < sortNums.length; i++) {
    numCountHash[sortNums[i]] = (numCountHash[sortNums[i]] || 0) + 1;
  }
  for (let i = 0; i < sortNums.length - 1; i++) {
    for (let j = i + 1; j < sortNums.length; j++) {
      const t = sortNums[i];
      sortNums[i] = sortNums[j];
      sortNums[j] = t;
    }
  }
  for (let i = 0; i < sortNums.length - 1; i++) {
    for (let j = i + 1; j < sortNums.length; j++) {
      const plusString = (sortNums[i] + sortNums[j]).toString();
      if (!binaryPlusHash[plusString]) binaryPlusHash[plusString] = [];
      diffPush(binaryPlusHash[plusString], [sortNums[i], sortNums[j]]);
    }
  }
  const binaryKeys = Object.keys(binaryPlusHash);

  const res: number[][] = [];
  for (let k = 0; k < binaryKeys.length; k++) {
    const arrA = binaryPlusHash[binaryKeys[k]];
    const arrB = binaryPlusHash[target - +binaryKeys[k]];
    if (arrA?.length > 0 && arrB?.length > 0) {
      for (let i = 0; i < arrA.length; i++) {
        for (let j = 0; j < arrB.length; j++) {
          const a = arrA[i][0];
          const b = arrA[i][1];
          const c = arrB[j][0];
          const d = arrB[j][1];
          numCountHash[a]--;
          numCountHash[b]--;
          numCountHash[c]--;
          numCountHash[d]--;
          if (
            numCountHash[a] >= 0 &&
            numCountHash[b] >= 0 &&
            numCountHash[c] >= 0 &&
            numCountHash[d] >= 0
          ) {
            diffPush(res, [a, b, c, d]);
          }
          numCountHash[a]++;
          numCountHash[b]++;
          numCountHash[c]++;
          numCountHash[d]++;
        }
      }
    }
  }
  return res;
}
// @lc code=end
console.log(fourSum([-9, 4, 0, -3, 6, 3, -3, -9, -7, 1, 0, -7, -8, 7, 1], -9));
console.log('end');
