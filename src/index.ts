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

type Last = Button & {
    x: boolean
}

function getActions(btns: Last){
    console.log(`Action for Button up is ${btns.up}`);
    console.log(`Action for Button down is ${btns.down}`);
    console.log(`Action for Button right is ${btns.right}`);
    console.log(`Action for Button left is ${btns.left}`);
    console.log(`Action for Last type x is ${btns.x}`);
}

// getActions({up: "jump", down: "go down", right: "go right", left: "go left", x: true});

// data types: Literal Types

type fr = 0 | 1 | -1 ;

function compare(num1: number, num2: number): fr {
    if (num1 === num2){
        return 0;
    }
    else if (num1 > num2){
        return 1;
    }
    else {
        return -1;
    }
}



// data types: Tuple type
let article: [number, string, boolean] = [11, "title one", true];
const [id, title, published] = article;

console.log(id);
console.log(title);
console.log(published);