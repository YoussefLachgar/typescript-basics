let showMsg = true;

function showDetails(name: string, age: number, salary: number){
    if(showMsg){
        return `Hello ${name}, Your Ag is ${age}, Salary is ${salary}`;
    }

    return "Ther is no data to chow";
}

console.log(showDetails("Youssef", 16, 5000));