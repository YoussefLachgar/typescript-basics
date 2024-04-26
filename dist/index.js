"use strict";
let showMsg = true;
function showDetails(name, age, salary) {
    if (showMsg) {
        return `Hello ${name}, Your Ag is ${age}`;
    }
    return "Ther is no data to chow";
}
function addAll(...nums) {
    let result = 0;
    nums.forEach((num) => result += num);
    return result;
}
const add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(16, 500));
//# sourceMappingURL=index.js.map