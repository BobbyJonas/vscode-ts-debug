function LeftRotateString(str: string, n: number): string {
  if (!str) return '';
  return str.slice(n) + str.slice(0, n);
}

console.log(LeftRotateString('abcXYZdef', 3));
