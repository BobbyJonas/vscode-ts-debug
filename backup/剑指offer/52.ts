function match(str: string, pattern: string): boolean {
  function max(a: number, b: number): number {
    if (a > b) return a;
    else return b;
  }
  let matchArr: boolean[][] = [];
  if (!str && !pattern) return true;
  if (str && !pattern) return false;
  for (let i = 0; i <= max(str.length, pattern.length); i++) {
    matchArr.push([]);
  }
  for (let i = 0; i <= str.length; i++) {
    for (let j = 0; j <= pattern.length; j++) {
      if (j === 0) {
        matchArr[i][j] = i === 0;
      } else {
        if (pattern[j - 1] !== '*') {
          if (i >= 1 && (str[i - 1] === pattern[j - 1] || pattern[j - 1] === '.'))
            matchArr[i][j] = matchArr[i - 1][j - 1];
        } else {
          if (j >= 2) {
            matchArr[i][j] = matchArr[i][j] || matchArr[i][j - 2];
          }
          if (i >= 1 && j >= 2 && (str[i - 1] === pattern[j - 2] || pattern[j - 2] == '.')) {
            matchArr[i][j] = matchArr[i][j] || matchArr[i - 1][j];
          }
        }
      }
    }
  }
  return Boolean(matchArr[str.length][pattern.length]);
}

console.log(match('', '.*'));
