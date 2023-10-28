function FindNumsAppearOnce(array: number[]): number[] {
  interface UniqueObject {
    [propName: string]: number;
  }
  let checkUnique: UniqueObject = {};
  let numQueue: number[] = [];
  for (let i = 0; i < array.length; i++) {
    if (checkUnique[array[i]] >= 0) {
      if (checkUnique[array[i]] < numQueue.length) {
        numQueue[checkUnique[array[i]]] = -Number.MAX_VALUE;
        checkUnique[array[i]] = Number.MAX_VALUE;
      }
    } else {
      numQueue.push(array[i]);
      checkUnique[array[i]] = numQueue.length - 1;
    }
  }
  let resQueue: number[] = [];
  for (let i = 0; i < array.length; i++) {
    if (numQueue[i] > -Number.MAX_VALUE) resQueue.push(numQueue[i]);
  }
  while (resQueue.length > 2) {
    resQueue.pop();
  }
  return resQueue;
}
