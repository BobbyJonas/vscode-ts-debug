/* eslint-disable no-param-reassign */
/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const current: number[] = [];

  for (let i = 0; i < candidates.length - 1; i++) {
    for (let j = i + 1; j < candidates.length; j++) {
      if (candidates[i] > candidates[j]) {
        const t = candidates[i];
        candidates[i] = candidates[j];
        candidates[j] = t;
      }
    }
  }

  const newCandidates: any[] = [];
  let currentCandidate: any = {};
  for (let i = 0; i < candidates.length; i++) {
    if (currentCandidate.num !== candidates[i]) {
      if (currentCandidate.count > 0) {
        newCandidates.push(currentCandidate);
      }
      currentCandidate = {
        num: candidates[i],
        count: 1,
      };
    } else {
      currentCandidate.count += 1;
    }
  }
  if (currentCandidate.count > 0) {
    newCandidates.push(currentCandidate);
  }

  function backTrack(numLeft: number, currentIndex: number) {
    if (numLeft < 0) return;
    if (numLeft === 0) {
      res.push(JSON.parse(JSON.stringify(current)));
      return;
    }
    for (let i = currentIndex; i < newCandidates.length; i++) {
      if (newCandidates[i].count >= 1 && numLeft - newCandidates[i].num >= 0) {
        current.push(newCandidates[i].num);
        newCandidates[i].count -= 1;
        backTrack(numLeft - newCandidates[i].num, i);
        newCandidates[i].count += 1;
        current.pop();
      }
    }
  }
  backTrack(target, 0);

  return res;
}
// @lc code=end

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
