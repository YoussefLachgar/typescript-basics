let showMsg = true;

function showDetails(name: string, age: number, salary: number){
    if(showMsg){
        return `Hello ${name}, Your Ag is ${age}`;
    }

    return "Ther is no data to chow";
}

function addAll(...nums: number[]){
    let result = 0;
    for(let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}

console.log(addAll( 16, 5000));