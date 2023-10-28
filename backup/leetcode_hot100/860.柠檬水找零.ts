/*
 * @lc app=leetcode.cn id=860 lang=typescript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
function lemonadeChange(bills: number[]): boolean {
  const queue: Record<number, number> = {};
  return bills.every((money) => {
    const left = money - 5;
    queue[money] = (queue[money] ?? 0) + 1;
    if (left === 0) return true;
    if (left === 5) {
      if (!queue[left]) return false;
      queue[left]--;
      return true;
    }
    if (left === 15) {
      if (queue[10] && queue[5]) {
        queue[10]--;
        queue[5]--;
        return true;
      }
      if (queue[5] >= 3) {
        queue[5] -= 3;
        return true;
      }
      return false;
    }
    return false;
  });
}
// @lc code=end

console.log(lemonadeChange([5, 5, 10, 10, 20]));
