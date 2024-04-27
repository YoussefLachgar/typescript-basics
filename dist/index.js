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
const add = (num1, num2) => num1 + num2;
let smya = "Elking";
console.log(smya);
//# sourceMappingURL=index.js.map