// The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s.

// For any given binary number,formatted as a string, return the Ones' Complement of that number.

// Examples
// "0"    -> "1"
// "1"    -> "0"
// "000"  -> "111"
// "1001" -> "0110"
// "1001" -> "0110"


function onesComplement(n) {
    return [...n].map(element => ((+element + 1) % 2)).join('');
};