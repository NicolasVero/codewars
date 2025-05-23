// Function Specification
// Write a function that calculates the count of partitions of a number n of length k whose elements do not contain the number x.

// Arguments
// n: a non-negative integer to be partitioned
// k: a non-negative integer specifying the length of the partitions to be counted
// x: a non-negative integer that must not be in any of the counted partitions
// Examples
// Let n = 10, k = 3, and x = 3.

// There are 8 ways to partition 10 into 3 addends:

// 1 + 1 + 8
// 1 + 2 + 7
// 1 + 3 + 6
// 1 + 4 + 5
// 2 + 2 + 6
// 2 + 3 + 5
// 2 + 4 + 4
// 3 + 3 + 4
// 3 of those partitions contain 3. Therefore, our function should return 5.

// Note: Addends only contain positive integers. There, if the value of x is 0, you should count all partitions of the given size. Using the above example with x = 0, your function should return 8 instead of 5.


function partConst(n, k, num) {
    let count = 0;

    function backtrack(remaining, parts, start) {
        if (parts.length === k) {
            if (remaining === 0 && !parts.includes(num)) {
                count++;
            }

            return;
        }

        for (let i = start; i <= remaining; i++) {
            backtrack(remaining - i, [...parts, i], i);
        }
    }

    backtrack(n, [], 1);
    return count;
}
