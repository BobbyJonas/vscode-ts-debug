interface UniqueObject {
  [propName: string]: boolean;
}
function Permutation(str: string): string[] {
  let res: string[] = [];
  let flagDigit: boolean[] = [];
  let len = str.length;
  let checkUnique: UniqueObject = {};

  function recursion(depth: number, currentString: string): void {
    if (len - depth >= 1) {
      for (let i = 0; i < str.length; i++) {
        if (!flagDigit[i]) {
          flagDigit[i] = true;
          recursion(depth + 1, currentString + str[i]);
          flagDigit[i] = false;
        }
      }
    } else {
      if (!checkUnique[currentString]) {
        res.push(currentString);
        checkUnique[currentString] = true;
      }
    }
  }
  recursion(0, '');
  return res;
}

console.log(Permutation('abc'));
