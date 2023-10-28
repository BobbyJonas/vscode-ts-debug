/*
 * @lc app=leetcode.cn id=68 lang=typescript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
function fullJustify(words: string[], maxWidth: number): string[] {
  const res: string[] = [];
  let i = 0;
  while (i < words.length) {
    let k = i;
    let currentLen = 0;
    let actualLen = 0;
    let currentLine = '';
    for (k = i; k < words.length; k++) {
      if (k === i) {
        currentLen += words[k].length;
      } else {
        currentLen += words[k].length + 1;
        if (currentLen > maxWidth) break;
      }
      actualLen += words[k].length;
    }
    let remainSpaceLen = maxWidth - actualLen;
    if (k < words.length) {
      for (let k1 = i; k1 < k; k1++) {
        currentLine += words[k1];
        const currentSpaceLen = k - k1 - 1 > 0 ? Math.ceil(remainSpaceLen / (k - k1 - 1)) : 0;
        for (let p = 0; p < currentSpaceLen; p++) currentLine += ' ';
        remainSpaceLen -= currentSpaceLen;
      }
    } else {
      for (let k1 = i; k1 < k; k1++) {
        if (k1 > i) {
          remainSpaceLen -= 1;
          currentLine += ' ';
        }
        currentLine += words[k1];
      }
    }
    while (remainSpaceLen > 0) {
      currentLine += ' ';
      remainSpaceLen--;
    }
    i = k;
    res.push(currentLine);
  }
  return res;
}
// @lc code=end
console.log(
  fullJustify(
    [
      'Science',
      'is',
      'what',
      'we',
      'understand',
      'well',
      'enough',
      'to',
      'explain',
      'to',
      'a',
      'computer.',
      'Art',
      'is',
      'everything',
      'else',
      'we',
      'do',
    ],
    20
  )
);
