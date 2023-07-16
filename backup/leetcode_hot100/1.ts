// ? 1. 两数之和

function twoSum(nums: number[], target: number): number[] {
  const hash: {
    [prop: number]: number;
  } = {};
  nums.forEach((item: number, index) => {
    hash[item] = index;
  });
  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] >= 0 && i !== hash[target - nums[i]]) {
      return [i, hash[target - nums[i]]];
    }
  }
  return [];
}

console.log(twoSum([3, 2, 4], 6));
