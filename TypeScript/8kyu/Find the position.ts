// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested


export function position(alphabet: string): string {
    return "Position of alphabet: " + (alphabet.charCodeAt(0) - 96);
}
