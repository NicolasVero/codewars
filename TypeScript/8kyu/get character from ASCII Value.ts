// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:

// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0


export function getChar(c: number): string {
    return String.fromCharCode(c);
}