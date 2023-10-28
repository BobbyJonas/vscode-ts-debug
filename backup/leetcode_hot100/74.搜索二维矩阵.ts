/*
 * @lc app=leetcode.cn id=74 lang=typescript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  function binarySearch(arr: number[], num: number): number {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
      const k = Math.floor((j + i) / 2);
      if (arr[k] > num) j = k - 1;
      else if (arr[k] < num) i = k + 1;
      else return k;
    }
    return i;
  }
  const i1 = binarySearch(
    matrix.map((item) => item[0]),
    target
  );
  if (i1 > 0) {
    const j1 = binarySearch(matrix[i1 - 1], target);
    if (
      matrix[i1 - 1][j1 - 1] === target ||
      matrix[i1 - 1][j1] === target ||
      matrix[i1 - 1][j1 + 1] === target
    )
      return true;
  }
  const j1 = binarySearch(matrix[i1], target);
  if (matrix[i1][j1 - 1] === target || matrix[i1][j1] === target || matrix[i1][j1 + 1] === target)
    return true;
  return false;
}
// @lc code=end
console.log(
  searchMatrix(
    [
      [-8, -7, -5, -3, -3, -1, 1],
      [2, 2, 2, 3, 3, 5, 7],
      [8, 9, 11, 11, 13, 15, 17],
      [18, 18, 18, 20, 20, 20, 21],
      [23, 24, 26, 26, 26, 27, 27],
      [28, 29, 29, 30, 32, 32, 34],
    ],
    -5
  )
);
