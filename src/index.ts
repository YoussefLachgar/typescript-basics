// data types: enum

enum Kids {
    Five = 25,
    Seven = 20,
    Ten = 15
}

const enum Level {
    Kid = Kids.Five,
    Easy = 9,
    Medium = 6,
    Hard = 3
}

let lvl: string = "Kids";

// if(lvl === "Kids"){
//     console.log(`the level is ${lvl} And number of seconds is ${Level.Kid}`);
// }

// data types: Type Assertions

let myImg = document.getElementById("my-img") as HTMLImageElement;
console.log(myImg.src);