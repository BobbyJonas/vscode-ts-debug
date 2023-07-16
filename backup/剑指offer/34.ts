function FirstNotRepeatingChar(str: string): number {
  interface UniqueObject {
    [propName: string]: number;
  }
  let len = str.length;
  let checkUnique: UniqueObject = {};
  for (let i = 0; i < len; i++) {
    if (checkUnique[str[i]] === undefined) {
      checkUnique[str[i]] = i;
    } else {
      checkUnique[str[i]] = Number.MAX_VALUE;
    }
  }
  for (let i = 0; i < len; i++) {
    if (checkUnique[str[i]] !== undefined && checkUnique[str[i]] < Number.MAX_VALUE)
      return checkUnique[str[i]];
  }
  return -1;
}
