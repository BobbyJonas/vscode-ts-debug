function Sum_Solution(n: number): number {
  if (n <= 0) return 0;
  function recursion(n: number): number {
    if (n === 1) return 1;
    return n + recursion(n - 1);
  }
  return recursion(n);
}
