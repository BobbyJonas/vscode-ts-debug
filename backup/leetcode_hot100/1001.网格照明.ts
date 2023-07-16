/*
 * @lc app=leetcode.cn id=1001 lang=typescript
 *
 * [1001] 网格照明
 */

// @lc code=start
function gridIllumination(n: number, lamps: number[][], queries: number[][]): number[] {
  const line: number[][] = [];
  const col: number[][] = [];
  const diag: number[][] = [];
  const revDiag: number[][] = [];

  const walkMap: number[][] = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 0],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const surroundMap: number[][][] = [];

  for (let i = 0; i < lamps.length; i++) {
    const [lampX, lampY] = lamps[i];
    if (!line[lampX]) line[lampX] = [];
    if (!col[lampY]) col[lampY] = [];
    if (!diag[lampX - lampY + n - 1]) diag[lampX - lampY + n - 1] = [];
    if (!revDiag[lampX + lampY]) revDiag[lampX + lampY] = [];

    line[lampX].push(i);
    col[lampY].push(i);
    diag[lampX - lampY + n - 1].push(i);
    revDiag[lampX + lampY].push(i);

    for (let k = 0; k < walkMap.length; k++) {
      const [walkX, walkY] = walkMap[k];
      const nextX = lampX + walkX;
      const nextY = lampY + walkY;
      if (nextX >= 0 && nextY >= 0 && nextX < n && nextY < n) {
        if (!surroundMap[nextX]) surroundMap[nextX] = [];
        if (!surroundMap[nextX][nextY]) surroundMap[nextX][nextY] = [];
        surroundMap[nextX][nextY].push(i);
      }
    }
  }

  const res: number[] = [];
  for (let i = 0; i < queries.length; i++) {
    const [queryX, queryY] = queries[i];
    if (
      line[queryX]?.length > 0 ||
      col[queryY]?.length > 0 ||
      diag[queryX - queryY + n - 1]?.length > 0 ||
      revDiag[queryX + queryY]?.length > 0
    ) {
      res.push(1);
    } else {
      res.push(0);
    }

    const surroundLampList = surroundMap[queryX]?.[queryY];
    surroundLampList?.forEach((lampIndex) => {
      const [lampX, lampY] = lamps[lampIndex];
      line[lampX] = line[lampX]?.filter((item) => item !== lampIndex);
      col[lampY] = col[lampY]?.filter((item) => item !== lampIndex);
      diag[lampX - lampY + n - 1] = diag[lampX - lampY + n - 1]?.filter(
        (item) => item !== lampIndex
      );
      revDiag[lampX + lampY] = revDiag[lampX + lampY]?.filter((item) => item !== lampIndex);
    });
  }
  return res;
}
// @lc code=end
console.log(
  gridIllumination(
    5,
    [
      [0, 0],
      [0, 4],
    ],
    [
      [0, 4],
      [0, 1],
      [1, 4],
    ]
  )
);
