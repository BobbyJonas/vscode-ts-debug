/*
 * @lc app=leetcode.cn id=30 lang=typescript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
function findSubstring(s: string, words: string[]): number[] {
  if (!(words?.length > 0)) return [];
  const res: number[] = [];

  const subLength = words.length * words[0].length;

  function findRepeatly(wordObj: any): void {
    for (let i = 0; i < s.length - subLength + 1; i++) {
      const wordObjCompare = JSON.parse(JSON.stringify(wordObj));
      const currentString = s.substr(i, subLength);
      if (currentString.length === subLength) {
        let i0 = 0;
        let ifValid = true;
        while (i0 + words[0].length <= currentString.length) {
          const currentWord = currentString.substr(i0, words[0].length);
          if (wordObjCompare[currentWord] > 0) {
            wordObjCompare[currentWord]--;
          } else {
            ifValid = false;
            break;
          }
          i0 += words[0].length;
        }
        if (ifValid) res.push(i);
      }
    }
  }

  const wordObj: any = {};
  for (let i = 0; i < words.length; i++) {
    wordObj[words[i]] = !wordObj[words[i]] ? 1 : wordObj[words[i]] + 1;
  }
  findRepeatly(wordObj);
  return res;
}
// @lc code=end
findSubstring('barfoothefoobarman', ['foo', 'bar']);
