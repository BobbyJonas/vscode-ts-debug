const letterObject: {
  [propName: string]: boolean;
} = {};
const letterQueue: string[] = [];
let currentQueue: number = 0;

function Init(): void {
  console.log('do nothing');
}

function FirstAppearingOnce() {
  return letterQueue?.[currentQueue] || '#';
}

function Insert(currentLetter: string): string {
  if (!currentLetter) return '';
  if (!letterObject[currentLetter]) {
    letterObject[currentLetter] = true;
    letterQueue.push(currentLetter);
  } else if (letterQueue[currentQueue] === currentLetter) {
    do {
      letterQueue[currentQueue] = '';
      currentQueue++;
    } while (letterQueue[currentQueue] === '' && currentQueue < letterQueue.length);
  } else {
    for (let i = currentQueue + 1; i < letterQueue.length; i++) {
      if (letterQueue[i] === currentLetter) {
        letterQueue[i] = '';
      }
    }
  }
  return letterQueue?.[currentQueue] || '#';
}

const myWord = 'google';

for (let i = 0; i < myWord.length; i++) {
  Insert(myWord[i]);
  console.log(FirstAppearingOnce());
}
