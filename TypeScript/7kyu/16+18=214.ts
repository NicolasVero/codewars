// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// Dayane Rivas adding up a sum while competing in the Guatemalan
// television show "Combate" in May 2016.

// In simple terms, our method does not like the principle of carrying
// over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

// Examples:

// 16

// * 18

// ---

// 214

// 26

// * 39

// ---

// 515

// 122

// * 81

// ---

// 1103

// 72

// * 97

// ---

// 1111

// Explanation:

// 1 + 1 = 2
// 6 + 8 = 14
// → 214

// 2 + 3 = 5
// 6 + 9 = 15
// → 515

// 1 + 0 = 1
// 2 + 8 = 10
// 2 + 1 = 3
// → 1103

// 7 + 9 = 16
// 2 + 7 = 9
// → 169



export function add(num1: number, num2: number): number {
    const length: number = Math.max(num1.toString().length, num2.toString().length);

    const s1: string = num1.toString().padStart(length, '0');
    const s2: string = num2.toString().padStart(length, '0');

    const results: number[] = [];

    for (let i = length - 1; i >= 0; i--) {
        const sum: number = Number(s1[i]) + Number(s2[i]);
        results.unshift(sum);
    }

    return Number(results.join(''));
}
