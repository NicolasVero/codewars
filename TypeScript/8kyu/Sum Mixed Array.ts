// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


export function sumMix(x: any[]): number {  
    const formate_array = x.map((element) => Number(element))
    return formate_array.reduce((acc, val) => acc += val);
}