function IsPopOrder(pushV: number[], popV: number[]): boolean {
  let stack: number[] = [];
  let k = 0;
  for (let i = 0; i < pushV.length; i++) {
    stack.push(pushV[i]);
    let popFlag = true;
    while (popFlag) {
      popFlag = false;
      if (stack.length > 0 && k < popV.length) {
        if (stack[stack.length - 1] === popV[k]) {
          stack.pop();
          k++;
          popFlag = true;
        }
      }
    }
  }
  if (stack.length > 0) return false;
  else return true;
}
