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
let jarab;
jarab = 10;
jarab = "ra can jarab";
function getActions(btns) {
    console.log(`Action for Button up is ${btns.up}`);
    console.log(`Action for Button down is ${btns.down}`);
    console.log(`Action for Button right is ${btns.right}`);
    console.log(`Action for Button left is ${btns.left}`);
    console.log(`Action for Last type x is ${btns.x}`);
}
function compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(compare(10, 4));
console.log(compare(10, 20));
console.log(compare(10, 10));
let article = [11, "title one", true];
//# sourceMappingURL=index.js.map