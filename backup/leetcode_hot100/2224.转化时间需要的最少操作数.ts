/* eslint-disable no-plusplus */
/*
 * @lc app=leetcode.cn id=2224 lang=typescript
 *
 * [2224] 转化时间需要的最少操作数
 */

// @lc code=start
function convertTime(current: string, correct: string): number {
  let [currentHour, currentMinute] = current.split(':').map((item) => Number(item));
  const [correctHour, correctMinute] = correct.split(':').map((item) => Number(item));

  let sum = 0;
  while (correctHour * 60 + correctMinute >= (currentHour + 1) * 60 + currentMinute) {
    currentHour++;
    sum++;
  }
  while (correctHour * 60 + correctMinute >= currentHour * 60 + currentMinute + 15) {
    currentMinute += 15;
    sum++;
  }
  while (correctHour * 60 + correctMinute >= currentHour * 60 + currentMinute + 5) {
    currentMinute += 5;
    sum++;
  }
  while (correctHour * 60 + correctMinute >= currentHour * 60 + currentMinute + 1) {
    currentMinute += 1;
    sum++;
  }
  return sum;
}
// @lc code=end
console.log(convertTime('09:41', '10:34'));
