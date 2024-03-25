// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Approach #1: Brute Force (simplest) - O(n2)
  // for (let i = 0; i < nums.length; i++) {
  //     for (let j = 0; j < nums.length; j++) {
  //         if (i !== j) {
  //             if ((nums[i] + nums[j]) === target) {
  //                 return [i, j];
  //             }
  //         }
  //     }
  // }

  // Approach #2: Hashmap - O(n)
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
};
