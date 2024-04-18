let showMsg = true;

function showDetails(name, age, salary){
    if(showMsg){
        return `Hello ${name}, Your Ag is ${age}`;
    }
}

console.log(showDetails("Youssef", 16));