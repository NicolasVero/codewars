// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.


function mostFrequentItemCount(collection) {
    if (collection.length === 0) {
        return 0;
    }
  
    const frequency_counter = {};
    for (const item of collection) {
        frequency_counter[item] = (frequency_counter[item] || 0) + 1;
    }
  
    let max_count = 0;
    for (const item in frequency_counter) {
        if (frequency_counter[item] > max_count) {
            max_count = frequency_counter[item];
        }
    }
  
    return max_count;
}
