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
getActions({ up: "jump", down: "go down", right: "go right", left: "go left", x: true });
console.log(jarab);
//# sourceMappingURL=index.js.map