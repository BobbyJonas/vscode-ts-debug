function isNumeric(str: string): boolean {
  const patternInteger = /^(\s*[+-]?\d+\s*)$/;
  const patternNumber = /^(\s*[+-]?((\d+\.)|(\.\d+)|(\d+\.\d+)\s*))$/;
  const patternSci = /^((\s*[+-]?\d+)|(\s*[+-]?((\d+\.)|(\.\d+)|(\d+\.\d+))))[eE](\s*[+-]?\d+\s*)$/;
  if (patternInteger.test(str) || patternNumber.test(str) || patternSci.test(str)) return true;
  return false;
}

console.log(isNumeric('e'));
