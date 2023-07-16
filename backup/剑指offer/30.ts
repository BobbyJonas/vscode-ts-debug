function max(a: number, b: number): number {
  if (a > b) return a;
  else return b;
}
function FindGreatestSumOfSubArray(array: number[]): number {
  if (array.length <= 0) return 0;
  let state: number[] = [array[0]];
  let res: number = -Number.MAX_VALUE;
  for (let i = 1; i < array.length; i++) {
    state[i] = max(array[i], state[i - 1] + array[i]);
  }
  for (let i = 0; i < state.length; i++) {
    res = max(res, state[i]);
  }
  return res;
}
