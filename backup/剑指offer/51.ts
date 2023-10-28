function multiply(A: number[]): number[] {
  if (!A) return [];
  if (A.length === 1) return [];
  let res = 1;
  let ifZero: boolean = false;
  let ifTwoZero: boolean = false;
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== 0) res *= A[i];
    else {
      if (ifZero) ifTwoZero = true;
      ifZero = true;
    }
  }
  let output: number[] = [];
  for (let i = 0; i < A.length; i++) {
    if (ifZero) {
      if (!ifTwoZero) {
        if (A[i] !== 0) output.push(0);
        else output.push(res);
      } else output.push(0);
    } else {
      output.push(res / A[i]);
    }
  }
  return output;
}
