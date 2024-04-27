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

console.log(jarab);