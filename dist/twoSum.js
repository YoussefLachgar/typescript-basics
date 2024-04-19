"use strict";
function twoSum(num, target) {
    for (var i = 0; i < num.length - 1; i++) {
        for (var j = i + 1; j < num.length; j++) {
            if (num[j] + num[i] == target) {
                return [i, j];
            }
        }
    }
    return -1;
}
console.log(twoSum([3, 2, 4], 6));
//# sourceMappingURL=twoSum.js.map