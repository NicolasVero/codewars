// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


export function twoSort(s: string[]): string {
    const first = [...s].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))[0];
    return first.split('').join('***');
}
