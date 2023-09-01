// Background - the Collatz Conjecture:
// Imagine you are given a positive integer, n, then:

// if n is even, calculate: n / 2
// if n is odd, calculate: 3 * n + 1
// Repeat until your answer is 1. The Collatz conjecture states that performing this operation repeatedly, you will always eventually reach 1.

// You can try creating Collatz sequences with this kata. For further information, see the wiki page.

// Now! Your task:
// Given an array of positive integers, return the integer whose Collatz sequence is the longest.

// Example:

// longestCollatz([2, 4, 3])===3;
// Explanation: The Collatz sequence for 2 has a length of 1, the sequence for 4 has a length of 2, and the sequence for 3 has a length of 7. So from our array, the integer 3 is the one with the longest Collatz sequence.

// Hence, your function should return 3.



function longestCollatz (inputArray) {

    let max   = 0;
    let index = 0;
    
    for(let i = 0; i < inputArray.length; i++) {
        if(collatz(inputArray[i]) > max) {
            max = collatz(inputArray[i]);
            index = i; 
        }
    }
    
    return inputArray[index];
    
    
    function collatz(number) {
      
        let cpt = 0;
      
        while(number !== 1) {
            number = (number % 2 === 0) ? number / 2 : number * 3 + 1;     
            cpt++;
        }
      
        return cpt;
    }
}