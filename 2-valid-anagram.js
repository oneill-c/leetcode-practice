// https://leetcode.com/problems/valid-anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // Common to all cases: if they are not the same length, they cannot be anagrams
  if (s.length != t.length) {
    return false;
  }

  // Approach #1: Brute Force (simplest)
  // for (char of t) {
  //     if (!s.includes(char)) {
  //         return false;
  //     }
  // }
  // return true;

  // Approach #2: Sorting
  // const sArray = Array.from(s);
  // const tArray = Array.from(t);

  // sArray.sort();
  // tArray.sort();

  // return sArray.join('') === tArray.join('');

  // Approach #3: HashTable / HashMap
  const charCount = new Map();

  // Increment charCount for chars in "s"
  for (char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Decrement charCount for chars in "t"
  for (char in t) {
    // if char does not exist or if count for char is 0, not anagram
    if (!charCount.has(char) || charCount.get(char) === 0) {
      return false;
    }

    charCount.set(char, charCount.get(char) - 1);
  }
};
