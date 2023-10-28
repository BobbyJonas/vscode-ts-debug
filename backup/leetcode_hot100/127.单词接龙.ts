/*
 * @lc app=leetcode.cn id=127 lang=typescript
 *
 * [127] 单词接龙
 */

// @lc code=start
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const wordRelative: number[][] = [];
  const wordInfo: {
    prevIndex: [number];
    step: [number];
  }[] = [];
  const queue: {
    prevIndex: number;
    nextIndex: number;
    step: number;
  }[] = [];
  let res: number = Infinity;

  function backtrack(): void {
    while (queue.length > 0) {
      const current = (queue.shift() || {}) as any;
      const { prevIndex, nextIndex: currentIndex, step: currentStep } = current;
      if (!wordInfo[currentIndex] || currentStep <= wordInfo[currentIndex]?.step?.[0]) {
        if (!wordInfo[currentIndex] || currentStep < wordInfo[currentIndex]?.step?.[0]) {
          wordInfo[currentIndex] = {
            prevIndex: [prevIndex],
            step: [currentStep],
          };
          if (wordList[currentIndex] === endWord) {
            res = Math.min(res, currentStep);
            return;
          }
          wordRelative[currentIndex]?.forEach((item) => {
            if (!wordInfo[item]) {
              queue.push({
                prevIndex: currentIndex,
                nextIndex: item,
                step: currentStep + 1,
              });
            }
          });
        } else {
          wordInfo[currentIndex].prevIndex.push(prevIndex);
          wordInfo[currentIndex].step.push(currentStep);
        }
      }
    }
  }

  for (let i = 0; i < wordList.length - 1; i++) {
    for (let j = i + 1; j < wordList.length; j++) {
      const word1 = wordList[i];
      const word2 = wordList[j];
      if (word1.length === word2.length) {
        let dist = 0;
        for (let k = 0; k < word1.length; k++) {
          if (word1[k] !== word2[k]) dist++;
          if (dist >= 2) break;
        }
        if (dist === 1) {
          if (!wordRelative[i]) wordRelative[i] = [];
          if (!wordRelative[j]) wordRelative[j] = [];
          wordRelative[i].push(j);
          wordRelative[j].push(i);
        }
      }
    }
  }

  let beginIndex: number = -1;

  for (let i = 0; i < wordList.length - 1; i++) {
    if (wordList[i] === beginWord) {
      beginIndex = i;
      break;
    }
  }
  if (beginIndex >= 0) wordInfo[beginIndex] = { prevIndex: [-1], step: [0] };
  for (let i = 0; i < wordList.length; i++) {
    if (beginIndex !== i && beginWord.length === wordList[i].length) {
      let dist = 0;
      for (let k = 0; k < beginWord.length; k++) {
        if (beginWord[k] !== wordList[i][k]) dist++;
        if (dist >= 2) break;
      }
      if (dist === 1) {
        queue.push({ prevIndex: beginIndex, nextIndex: i, step: 1 });
      }
    }
  }

  backtrack();

  return res === Infinity ? 0 : res + 1;
}
// @lc code=end
