// Given a string s, find the length of the longest 
// substring
//  without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var letters = new Set();
    var res = 0, l = 0;
    for (var r = 0; r < s.length; r++) {
        while (letters.has(s[r])) {
            letters.delete(s[l]);
            l++;
        }
        letters.add(s[r]);
        res = Math.max(res, r - 1 + 1);
    }
    return res;
};
console.log(lengthOfLongestSubstring("abcabcbb")); // Output should be 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output should be 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output should be 3
