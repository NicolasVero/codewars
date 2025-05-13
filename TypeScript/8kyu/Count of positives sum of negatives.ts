// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


export function countPositivesSumNegatives(input: number[] | null): number[] {
    if (!input || input.length === 0) {
        return [];
    }

    let positive_count = 0;
    let negative_sum = 0;

    for (const n of input) {
        if (n > 0) {
            positive_count++;
        } 
        
        if (n < 0) {
            negative_sum += n;
        }
    }

    return [positive_count, negative_sum];
}
