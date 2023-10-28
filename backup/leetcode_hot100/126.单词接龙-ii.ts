/*
 * @lc app=leetcode.cn id=126 lang=typescript
 *
 * [126] 单词接龙 II
 */

// @lc code=start
function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
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
          if (wordList[currentIndex] !== endWord) {
            wordRelative[currentIndex].forEach((item) => {
              if (!wordInfo[item]) {
                queue.push({
                  prevIndex: currentIndex,
                  nextIndex: item,
                  step: currentStep + 1,
                });
              }
            });
          }
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

  function constructResult(): string[][] {
    const res: string[][] = [];
    let k: number = -1;
    for (let i = 0; i < wordList.length; i++)
      if (wordList[i] === endWord) {
        k = i;
        break;
      }
    if (k === -1) return [];
    const current: string[] = [];
    function treeRecursion(currentIndex: number): void {
      current.unshift(currentIndex === -1 ? beginWord : wordList[currentIndex]);
      if (currentIndex === -1 || wordList[currentIndex] === beginWord) {
        res.push(JSON.parse(JSON.stringify(current)));
        current.shift();
        return;
      }
      const currentNode = wordInfo[currentIndex];
      const prevArr = currentNode?.prevIndex;
      for (let i = 0; i < prevArr?.length; i++) {
        treeRecursion(prevArr[i]);
      }
      current.shift();
    }
    treeRecursion(k);
    return res;
  }

  backtrack();

  return constructResult();
}
// @lc code=end
console.log(
  findLadders('ta', 'if', [
    'ts',
    'sc',
    'ph',
    'ca',
    'jr',
    'hf',
    'to',
    'if',
    'ha',
    'is',
    'io',
    'cf',
    'ta',
  ])
);
