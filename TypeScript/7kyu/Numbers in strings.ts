// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!


export function solve(s: string): number {
    const numbers = s.match(/\d+/g);
    
    if(numbers === null) {
        return -1;
    }
    
    return Math.max(...numbers.map(Number));
}