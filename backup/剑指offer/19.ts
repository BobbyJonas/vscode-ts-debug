function printMatrix(matrix: number[][]): number[] {
  let m: number = matrix.length;
  let n: number = matrix[0].length;
  let moveX: number[] = [0, 1, 0, -1];
  let moveY: number[] = [1, 0, -1, 0];
  let result: number[] = [];
  function procedureMove(x: number, y: number, direction: number): void {
    let x0: number = x + moveX[direction];
    let y0: number = y + moveY[direction];
    if (x0 >= 0 && x0 < m && y0 >= 0 && y0 < n) {
      if (matrix[x0][y0] > Number.MIN_VALUE) {
        result.push(matrix[x0][y0]);
        matrix[x0][y0] = Number.MIN_VALUE;
        return procedureMove(x0, y0, direction);
      }
    }

    let ifMove = false;
    for (
      let _newDirection: number = direction + 1;
      _newDirection <= direction + 3;
      _newDirection++
    ) {
      let newDirection = _newDirection % 4;
      x0 = x + moveX[newDirection];
      y0 = y + moveY[newDirection];
      if (x0 >= 0 && x0 < m && y0 >= 0 && y0 < n) {
        if (matrix[x0][y0] > Number.MIN_VALUE) {
          direction = newDirection;
          ifMove = true;
          break;
        }
      }
    }
    if (ifMove) {
      result.push(matrix[x0][y0]);
      matrix[x0][y0] = Number.MIN_VALUE;
      return procedureMove(x0, y0, direction);
    } else return;
  }
  result.push(matrix[0][0]);
  matrix[0][0] = Number.MIN_VALUE;
  procedureMove(0, 0, 0);
  return result;
}

let testMatrix: number[][] = [[1], [2], [3], [4], [5]];

debugger;
console.log(printMatrix(testMatrix));
