// In mathematics, an nth root of a number x, where n is usually assumed to be a positive integer, is a number r which, when raised to the power n, yields x:

// r
// n
// =
// x
// r 
// n
//  =x
// Given number n, such that n > 1, find if its 2nd root, 4th root and 8th root are all integers (fractional part is 0). Return true if yes, false if no.

// Examples
// // 2nd root of 256 is 16
// // 4th root of 256 is 4
// // 8th root of 256 is 2
// 256 --> true 

// // 2nd root of 16 is 4
// // 4th root of 16 is 2
// // 8th root of 16 is 1.4142135... --> not an integer
// 16 --> false


function perfectRoots(n, count = 3) {
    n = Math.sqrt(n);
    return (count > 1) ? perfectRoots(n, count - 1) : Number.isInteger(n);
}
