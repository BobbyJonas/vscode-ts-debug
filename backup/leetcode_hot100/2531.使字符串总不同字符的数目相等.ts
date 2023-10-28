/* eslint-disable no-plusplus */
/*
 * @lc app=leetcode.cn id=2531 lang=typescript
 *
 * [2531] 使字符串总不同字符的数目相等
 */

// @lc code=start
function isItPossible(word1: string, word2: string): boolean {
  let letterMap1: Record<string, number> = {};
  let letterMap2: Record<string, number> = {};
  for (let i = 0; i < word1.length; i++) {
    letterMap1[word1[i]] = (letterMap1[word1[i]] ?? 0) + 1;
  }
  for (let i = 0; i < word2.length; i++) {
    letterMap2[word2[i]] = (letterMap2[word2[i]] ?? 0) + 1;
  }

  if (Object.keys(letterMap1).length < Object.keys(letterMap2).length) {
    const t = letterMap1;
    letterMap1 = letterMap2;
    letterMap2 = t;
  }

  const uniqueLetterNum1 = Object.keys(letterMap1).length;
  const uniqueLetterNum2 = Object.keys(letterMap2).length;

  for (let i = 0; i < uniqueLetterNum1; i++) {
    for (let j = 0; j < uniqueLetterNum2; j++) {
      const currentLetter1 = Object.keys(letterMap1)[i];
      const currentLetter2 = Object.keys(letterMap2)[j];
      let resLetterNum1 = uniqueLetterNum1;
      let resLetterNum2 = uniqueLetterNum2;
      letterMap1[currentLetter1]--;
      letterMap2[currentLetter2]--;
      if (letterMap1[currentLetter1] === 0) resLetterNum1--;
      if (letterMap2[currentLetter2] === 0) resLetterNum2--;
      if ((letterMap2[currentLetter1] ?? 0) < 1) resLetterNum2++;
      if ((letterMap1[currentLetter2] ?? 0) < 1) resLetterNum1++;
      letterMap1[currentLetter1]++;
      letterMap2[currentLetter2]++;
      if (resLetterNum1 === resLetterNum2) return true;
    }
  }
  return false;
}
// @lc code=end
console.log(isItPossible('aa', 'ab'));
