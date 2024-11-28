// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


function isVow(ascii_codes) {
    const vowel_ascii_codes = [97, 101, 105, 111, 117];
    return ascii_codes.map((element) => {
        return element = (vowel_ascii_codes.includes(element)) ? String.fromCharCode(element) : element;
    });
}