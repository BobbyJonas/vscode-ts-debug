function Add(num1: number, num2: number): number {
  let a = num1;
  let b = num2;
  while (a !== 0) {
    let up = (a & b) << 1;
    let plus = a ^ b;
    a = up;
    b = plus;
  }
  return b;
}

console.log(Add(5, 10));
