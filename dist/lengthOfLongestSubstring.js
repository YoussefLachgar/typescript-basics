"use strict";
var lengthOfLongestSubstring = (s) => {
    let maxLen = 0;
    let map = {};
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in map && map[char] >= start) {
            start = map[char] + 1;
        }
        map[char] = i;
        maxLen = Math.max(maxLen, i - start + 1);
    }
    return maxLen;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
//# sourceMappingURL=lengthOfLongestSubstring.js.map