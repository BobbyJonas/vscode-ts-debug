/* eslint-disable @typescript-eslint/naming-convention */
/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  function stringToHashTable(str: string): any {
    const hashTable: { [prop: string]: number } = {};
    for (let i = 0; i < str.length; i++) {
      hashTable[str[i]] = (hashTable[str[i]] ?? 0) + 1;
    }
    return hashTable;
  }
  function ifHashTableInclude(hashTable1: any, hashTable2: any): boolean {
    return Object.keys(hashTable2).every((item) => hashTable1[item] >= hashTable2[item]);
  }
  let i = 0;
  let j = -1;
  let currentFlag = false;
  let res: string | undefined;
  const hashTable1: any = {};
  const hashTable2 = stringToHashTable(t);
  while (i < s.length && j < s.length) {
    if (!currentFlag) {
      j++;
      hashTable1[s[j]] = (hashTable1[s[j]] ?? 0) + 1;
      if (ifHashTableInclude(hashTable1, hashTable2)) {
        currentFlag = true;
        if (res === undefined || j - i + 1 < res.length) res = s.substring(i, j + 1);
      }
    } else {
      hashTable1[s[i]] = (hashTable1[s[i]] ?? 0) - 1;
      i++;
      if (ifHashTableInclude(hashTable1, hashTable2)) {
        if (res === undefined || j - i + 1 < res.length) res = s.substring(i, j + 1);
      } else currentFlag = false;
    }
  }
  return !res ? '' : res;
}
// @lc code=end
console.log(minWindow('a', 'aa'));
