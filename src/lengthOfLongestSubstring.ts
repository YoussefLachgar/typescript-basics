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
var lengthOfLongestSubstring = (s: string): number => {
    let maxLen = 0;
    let map: { [char: string]: number } = {}; // Map to store the last index of each character
    let start = 0; // Start index of the current substring without repeats

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in map && map[char] >= start) {
            // If character is found in map and it is within the current window
            start = map[char] + 1; // Move the start right after the last occurrence
        }
        map[char] = i; // Update the last index of the character
        maxLen = Math.max(maxLen, i - start + 1); // Calculate the max length of the substring
    }

    return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // Output should be 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output should be 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output should be 3
