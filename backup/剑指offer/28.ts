interface timesObject {
  [propName: string]: number;
}
function MoreThanHalfNum_Solution(numbers: number[]): number {
  let noteTimes: timesObject = {};
  for (let i = 0; i < numbers.length; i++) {
    if (!noteTimes[numbers[i]]) noteTimes[numbers[i]] = 0;
    noteTimes[numbers[i]]++;
    if (noteTimes[numbers[i]] > numbers.length / 2) return numbers[i];
  }
  return -1;
}
