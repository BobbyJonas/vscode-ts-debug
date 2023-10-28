function NumberOf1Between1AndN_Solution(n: number): number {
  let count: number = 0;
  while (n > 0) {
    let str: string = Number.prototype.toString.call(n);
    for (let i: number = 0; i < str.length; i++) {
      if (str[i] == '1') count++;
    }
    n--;
  }
  return count;
}
