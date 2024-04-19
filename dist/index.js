"use strict";
let showMsg = true;
function showDetails(name, age, salary) {
    if (showMsg) {
        return `Hello ${name}, Your Ag is ${age}`;
    }
    return "Ther is no data to chow";
}
console.log(showDetails("Youssef", 16, 5000));
//# sourceMappingURL=index.js.map