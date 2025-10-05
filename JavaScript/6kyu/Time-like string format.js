// Build up a method that takes a positive integer and formats it to a 'time - like' format.

// The method must raise an exception if its hour length is less than 3 digits and greater than 4.

// Examples:
// 800   --> '8:00'
// 1000  --> '10:00'
// 1451  --> '14:51'
// 3351  --> '33:51'
// 10000 --> raise an exception


function solution(hour) {
    const str = String(hour);
    
    if (str.length < 3 || str.length > 4) {
        throw "Invalid hour length";
    }
    
    return `${parseInt(str.slice(0, str.length - 2))}:${ str.slice(-2)}`;
}
