// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


export function findShort(s: string): number {
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length;
}