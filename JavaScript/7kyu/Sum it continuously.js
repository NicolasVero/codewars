// Make a function "add" that will be able to sum elements of list continuously and return a new list of sums.

// For example:

// add [1,2,3,4,5] == [1, 3, 6, 10, 15], because it's calculated like 
// this : [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, 1 + 2 + 3 + 4 + 5]



function add(arr) {
    let sum = arr[0];
    const result = [];
    
    for(let i = 1; i <= arr.length; i++) {
        result.push(sum);
        sum += arr[i];
    }
    
    return result;
}