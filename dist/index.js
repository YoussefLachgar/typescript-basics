"use strict";
var Kids;
(function (Kids) {
    Kids[Kids["Five"] = 25] = "Five";
    Kids[Kids["Seven"] = 20] = "Seven";
    Kids[Kids["Ten"] = 15] = "Ten";
})(Kids || (Kids = {}));
var Level;
(function (Level) {
    Level[Level["Kid"] = 25] = "Kid";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = 3] = "Hard";
})(Level || (Level = {}));
let lvl = "Kids";
function getActions(btns) {
    console.log(btns.one);
    console.log(btns.two);
    console.log(btns.three);
    console.log(btns.five);
}
getActions({ one: "hello", two: 100, three: true, five: false });
//# sourceMappingURL=index.js.map