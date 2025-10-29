// The Stanton measure of an array is defined as follows:
// Let n be the number of times the value 1 appears in the array.
// The Stanton measure is then the number of times n appears in the array.

// Task
// Write a function that takes an integer array and returns its Stanton measure.

// Examples
// For [1, 4, 3, 2, 1, 2, 3, 2]:
// 1 appears 2 times → 2 appears 3 times → Stanton measure = 3.

// For [1, 4, 1, 2, 11, 2, 3, 1]:
// 1 appears 3 times → 3 appears 1 time → Stanton measure = 1.


function stantonMeasure(array) {
    const n = array.filter((element) => element === 1).length;
    return array.filter((element) => element === n).length;
}
