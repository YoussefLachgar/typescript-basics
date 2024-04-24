// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.
// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s: string): string {
    let resR = 0, resL = 0;

    function buildPalindrome(l: number, r: number): void {
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
