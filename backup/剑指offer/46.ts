function LastRemaining_Solution(n: number, m: number): number {
  if (n <= 0) return -1;
  let index: number = 0;
  for (let i: number = 2; i <= n; i++) {
    index = (index + m) % i;
  }
  return index;
}
