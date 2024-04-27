let showMsg = true;

function showDetails(name: string, age: number, salary: number){
    if(showMsg){
        return `Hello ${name}, Your Ag is ${age}`;
    }

    return "Ther is no data to chow";
}

function addAll(...nums: number[]){
    let result = 0;
    // for(let i = 0; i < nums.length; i++) {
    //     result += nums[i];
    // }
    nums.forEach((num) => result += num);
    return result;
}

const add = (num1: number, num2: number): number => num1 + num2;

// data types: Type Alias
type st = string;
let smya: st = "Elking";

type standnum = string | number;
let jarab: standnum;
jarab = 10;
jarab = "ra can jarab";

// data types: Advanced Type Alias

type Button = {
    up: string,
    down: string,
    right: string,
    left: string
}

function getActions(btns: Button){
    console.log(`Action for Button up is ${btns.up}`);
    console.log(`Action for Button down is ${btns.down}`);
    console.log(`Action for Button right is ${btns.right}`);
    console.log(`Action for Button left is ${btns.left}`);
}

getActions({up: "jump", down: "go down", right: "go right", left: "go left"});

console.log(jarab);