// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  
    var sorted_arr = [];
    var zero_counter = 0;
    
    arr.forEach((e) => {
      if(e !== 0) sorted_arr.push(e);
      else zero_counter++;
    });
    
    for(let i = 0; i < zero_counter; i++)
      sorted_arr.push(0);
    
    return sorted_arr;
  }