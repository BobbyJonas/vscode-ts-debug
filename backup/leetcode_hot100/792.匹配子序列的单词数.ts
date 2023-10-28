/* eslint-disable no-plusplus */
/*
 * @lc app=leetcode.cn id=792 lang=typescript
 *
 * [792] 匹配子序列的单词数
 */

// @lc code=start
function numMatchingSubseq(s: string, words: string[]): number {
  const letterMap: Record<string, number[]> = {};
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (!letterMap[s[i]]) letterMap[s[i]] = [];
    letterMap[s[i]].push(i);
  }

  const findNext = (findLetter: string, startIndex: number = -1): number => {
    if (!letterMap[findLetter]) return -1;

    for (let i = 0; i < letterMap[findLetter].length; i++) {
      if (letterMap[findLetter][i] > startIndex) {
        return letterMap[findLetter][i];
      }
    }

    return -1;
  };
  words.forEach((word) => {
    let startIndex = -1;
    let letterIndex = 0;
    do {
      startIndex = findNext(word[letterIndex], startIndex);
      letterIndex++;
    } while (startIndex >= 0 && letterIndex < word.length);
    if (startIndex >= 0) {
      res++;
    }
  });
  return res;
}
// @lc code=end

console.log(numMatchingSubseq('abcde', ['a', 'bb', 'acd', 'ace']));
