// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


function firstNonRepeatingLetter(str) {
    if(str.length == 1) return str;
  
    const s = str.toLowerCase();
    
    for(let i = 0; i < s.length; i++) 
        if(countCharOccurence(s.charAt(i), s) == 1) 
            return str.charAt(i);
         
    return '';
  
    function countCharOccurence(char, str) {
        return str.split('').filter((c) => c == char).length;
    } 
}