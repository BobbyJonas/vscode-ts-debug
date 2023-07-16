function StrToInt(str: string): number {
  // write code here
  if (!str) return 0;
  let res = 0;
  let minusFlag: boolean = false;
  let i = 0;
  if (str[0] === '+' || str[0] === '-') {
    i++;
    if (str[0] === '-') minusFlag = true;
  }
  while (i < str.length) {
    if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
      res = res * 10 + str.charCodeAt(i) - 48;
    } else {
      res = 0;
      minusFlag = false;
      break;
    }
    i++;
  }
  if (minusFlag && res !== 0) res = -res;
  return res;
}
