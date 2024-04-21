// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum (num: number[], target: number): number[] | number {
    for (var i = 0; i < num.length - 1; i++){
        for (var j = i+1; j < num.length; j++){
            if(num[j] + num[i] == target){
                return [i,j];
            }
        }
    }
    return -1;
}

console.log(twoSum([3,2,4], 6));

