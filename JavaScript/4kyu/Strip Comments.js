// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"


function solution(input, markers) {
  
    let inputs = input.split('\n'); 
    let f_inputs = [];
    
    inputs.forEach(input => {
        for(let i = 0; i < markers.length; i++) {
            let pos = input.indexOf(markers[i]);
            input = (pos > -1) ? input.substring(0, pos) : input;
        }
      
        while(input.charAt(input.length - 1) == ' ')
            input = input.substring(0, input.length - 1);
            
        f_inputs.push(input);
    });
    
    return f_inputs.join("\n");
}