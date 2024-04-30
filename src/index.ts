// data types: enum

const enum Level {
    Kids = 15,
    Easy = 9,
    Medium = 6,
    Hard = 3
}

let lvl: string = "Easy";

if(lvl === "Easy"){
    console.log(`the level is ${lvl} And number of seconds is ${Level.Easy}`);
}