// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]



function smaller(nums) {
  
    let results = [];
    
    for(let i = 0; i < nums.length; i++) {
        let smallers = 0;
    
        for(let j = i + 1; j < nums.length; j++)
            if(nums[j] < nums[i])
                smallers++;
      
        results.push(smallers);
    }
    
    return results;
}