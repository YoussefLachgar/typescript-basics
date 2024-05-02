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

// let myImg = document.getElementById("my-img") as HTMLImageElement;
// let myImg = <HTMLImageElement> document.getElementById("my-img");
// console.log(myImg.src);

//data types: Type Union And Intersection Types

type A = {
    one: string,
    two: number,
    three: boolean
}

type B = A & {
    four: number,
}

type C = {
    five: boolean,
}

type mix = A & C;


function getActions(btns: mix){
    console.log(btns.one);
    console.log(btns.two);
    console.log(btns.three);
    console.log(btns.five);
}

getActions({one:"hello", two:100, three:true, five:false});

