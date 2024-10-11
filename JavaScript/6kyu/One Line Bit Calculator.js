// Given two binary no in string format return the decimal sum of both the numbers.

// Inspired from https://www.codewars.com/kata/bit-calculator

// Now write that code back smaller.

// Example:
// calculate('10','11') should return 5

// Explanation: '10' = 2 and '11' = 3 in decimal and 2 + 3 = 5
// :-)
// Your code length should be less than 39 characters


calculate=(a,b)=>+`0b${a}`+ +`0b${b}`;