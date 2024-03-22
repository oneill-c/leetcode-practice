// https://leetcode.com/problems/contains-duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // Approach #1: Brute force - O(n2)
  // for (let i = 0; i < nums.length; i++) {
  //     for (let j = 0; j < nums.length; j++) {
  //         if (i !== j && nums[i] === nums[j]) {
  //             return true;
  //         }
  //     }
  // }
  // return false

  // Approach #2: Sorting - sort = O(log n) + loop = O(n), total = O(n)
  // const sortedNums = nums.sort();

  // for (let i = 0; i < sortedNums.length; i++) {
  //     if (sortedNums[i] === nums[i+1]) {
  //         return true;
  //     }
  // }
  // return false;

  // Approach #3: Using a Set due to its uniqueness guarantee - O(n)
  const numsSet = new Set(nums);
  return numsSet.size != nums.length;

  // ...
  // there are likely other ways to solve this to slightly improve the time/space complexity
};
