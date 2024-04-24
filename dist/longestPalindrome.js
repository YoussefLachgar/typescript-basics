"use strict";
var longestPalindrome = function (s) {
    let resR = 0, resL = 0;
    function buildPalindrome(l, r) {
        while (l >= 0 && r < s.length && s[r] === s[l]) {
            if ((resR - resL) < (r - l)) {
                resR = r;
                resL = l;
            }
            l--;
            r++;
        }
    }
    for (var i = 0; i < s.length; i++) {
        buildPalindrome(i, i);
        buildPalindrome(i, i + 1);
    }
    return s.slice(resL, resR + 1);
};
console.log(longestPalindrome("palindromordnilapfhjer"));
//# sourceMappingURL=longestPalindrome.js.map