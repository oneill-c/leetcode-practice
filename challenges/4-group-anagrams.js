// https://leetcode.com/problems/group-anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // Approach #1: Brute Force (simplest) - O(n2)
  // function isAnagram(s1, s2) {
  //     return s1.split('').sort().join('') === s2.split('').sort().join('');
  // }

  // const groups = [];
  // for (let i = 0; i < strs.length; i++) {
  //     if (strs[i] !== null) {
  //         const group = [strs[i]];
  //         for (let j = i + 1; j < strs.length; j++) {
  //             if (strs[j] !== null && isAnagram(strs[i], strs[j])) {
  //                 group.push(strs[j]);
  //                 strs[j] = null;
  //             }
  //         }
  //         groups.push(group);
  //     }
  // }
  // return groups;

  // Approach #2: HashMap (more performant) - O(n)
  function sortString(str) {
    return str.split("").sort().join(""); // sort is likely O(n log n)
  }

  const groups = new Map();

  // iterate over each char in strs
  for (let i = 0; i < strs.length; i++) {
    const sortedStr = sortString(strs[i]);

    // compare against existing key
    if (groups.has(sortedStr)) {
      // add to existing group
      groups.set(sortedStr, [...groups.get(sortedStr), strs[i]]);
    } else {
      // create a new group
      groups.set(sortedStr, [strs[i]]);
    }
  }
  return groups;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(
  groupAnagrams([
    "theeyes",
    "theysee",
    "fourthofjuly",
    "joyfulfourth",
    "nat",
    "bat",
    "listen",
    "silent",
  ])
);
console.log(groupAnagrams([]));

/**
 *
 * Example output
 *
 * ➜  leetcode-practice git:(main) ✗ node 4-group-anagrams.js
 * Map(3) {
 *  'aet' => [ 'eat', 'tea', 'ate' ],
 *  'ant' => [ 'tan', 'nat' ],
 *  'abt' => [ 'bat' ]
 * }
 * Map(5) {
 * 'eeehsty' => [ 'theeyes', 'theysee' ],
 * 'ffhjloortuuy' => [ 'fourthofjuly', 'joyfulfourth' ],
 * 'ant' => [ 'nat' ],
 * 'abt' => [ 'bat' ],
 * 'eilnst' => [ 'listen', 'silent' ]
 * }
 * Map(0) {}
 */
