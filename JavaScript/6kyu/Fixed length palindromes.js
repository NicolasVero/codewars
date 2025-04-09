// Four-digit palindromes start with [1001,1111,1221,1331,1441,1551,1551,...] and the number at position 2 is 1111.

// You will be given two numbers a and b. Your task is to return the a-digit palindrome at position b if the palindromes were arranged in increasing order.

// Therefore, palin(4,2) = 1111, because that is the second element of the 4-digit palindrome series.

// More examples in the test cases. Good luck!


function palin(a, b) {
    const is_even = a % 2 === 0;
    const root_len = is_even ? a / 2 : Math.floor(a / 2) + 1;
    const start = Math.pow(10, root_len - 1);
    const root = (start + b - 1).toString();
    const mirror = is_even ? root : root.slice(0, -1);
    return Number(root + mirror.split("").reverse().join(""));
}
