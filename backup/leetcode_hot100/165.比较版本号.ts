/*
 * @lc app=leetcode.cn id=165 lang=typescript
 *
 * [165] 比较版本号
 */

// @lc code=start
function compareVersion(version1: string, version2: string): number {
  const v1Arr = version1.split('.').map((item) => Number(item));
  const v2Arr = version2.split('.').map((item) => Number(item));
  let i = 0;
  while (i < v1Arr.length) {
    if (v1Arr[i] > (v2Arr[i] ?? 0)) return 1;
    if (v1Arr[i] < (v2Arr[i] ?? 0)) return -1;
    i++;
  }
  while (i < v2Arr.length) {
    if ((v1Arr[i] ?? 0) > v2Arr[i]) return 1;
    if ((v1Arr[i] ?? 0) < v2Arr[i]) return -1;
    i++;
  }
  return 0;
}
// @lc code=end
