/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const hashMap: any = {};
  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const currentHash: any = {};
    for (let k = 0; k < word.length; k++) {
      if (currentHash[word[k]]) currentHash[word[k]]++;
      else currentHash[word[k]] = 1;
    }
    const keys = Object.keys(currentHash);
    let currentHashStr = '';
    keys.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    for (let k = 0; k < keys.length; k++) {
      const key = keys[k];
      currentHashStr += `${key}${currentHash[key]}`;
    }
    if (!hashMap[currentHashStr]) hashMap[currentHashStr] = [];
    hashMap[currentHashStr].push(word);
  }
  const res: string[][] = [];
  for (const key in hashMap) {
    res.push(hashMap[key]);
  }
  return res;
}

// @lc code=end
console.log(groupAnagrams(['ddddddddddg', 'dgggggggggg']));
