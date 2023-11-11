// Given a string of integers, return the number of odd-numbered substrings that can be formed.

// For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

// solve("1341") = 7. See test cases for more examples.

// Good luck!


function solve(s){
  
    let odd_substring = 0;
    
    for(let size = 1; size <= s.length; size++) {    
        for(let i = 0; i <= s.length - size; i++) {
            const ss = s.substring(i, i + size)
            if(parseInt(ss.charAt(ss.length - 1)) % 2 != 0) 
                odd_substring++;
        
        }
    }
    
    return odd_substring;
};