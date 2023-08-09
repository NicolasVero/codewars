// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.



function sumStrings(a, b) {
  
    let maxLength = Math.max(a.length, b.length);
    let retenue = 0;
    let result = '';
    
    while(a.length < maxLength) a = '0' + a;
    while(b.length < maxLength) b = '0' + b;
    
    while(a[0] === '0' && b[0] === '0') {
        a = a.slice(1); 
        b = b.slice(1);
        maxLength--;
    }
          
    for (let i = maxLength - 1; i >= 0; i--) {
        let digitSum = parseInt(a[i], 10) + parseInt(b[i], 10) + retenue;
        let digit = digitSum % 10;
        retenue = Math.floor(digitSum / 10);
        result = digit + result;
    }
  
    if (retenue > 0) result = retenue + result;
    
    return result; 
}