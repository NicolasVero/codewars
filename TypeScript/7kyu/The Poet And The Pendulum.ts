// Scenario
// the rhythm of beautiful musical notes is drawing a Pendulum

// Beautiful musical notes are the Numbers

// Task
// Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum

// The Smallest element of the list of integers , must come in center position of array/list.

// The Higher than smallest , goes to the right .
// The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.


export function pendulum(values: number[]): number[] {
    const sorted = values.slice().sort((a, b) => a - b);
    
    const left: number[] = [];
    const right: number[] = [];
    
    for (let i = 0; i < sorted.length; i++) {
        (i % 2 === 0 ? left : right).push(sorted[i]);
    }
    
    return left.reverse().concat(right);
}
