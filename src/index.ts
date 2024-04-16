let theName: string = "youssef";
let age: number = 40;
let hire: boolean = true;
let all: any = theName; // with any you can switch between types without having a problem
all = age;
all = hire;

function add( n: number, a: number){
    return a + n;
}

// console.log(add(1,"2")); // Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(add(1,3));