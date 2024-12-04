// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial


export function factorial(n: number, sum: number = 1): number {
    if(n <= 1) {
        return sum; 
    }
    
    return factorial(n - 1, sum * n);
}