"use strict";
var lengthOfLongestSubstring = (s) => {
    const letters = new Set();
    let res = 0, l = 0;
    for (let r = 0; r < s.length; r++) {
        while (letters.has(s[r])) {
            letters.delete(s[l]);
            l++;
        }
        letters.add(s[r]);
        res = Math.max(res, r - l + 1);
    }
    return res;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
//# sourceMappingURL=lengthOfLongestSubstring.js.map