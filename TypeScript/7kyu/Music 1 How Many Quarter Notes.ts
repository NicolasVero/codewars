// Given a time signature (as a string), you must find the amount of quarter notes that can be fit into one measure, which will be returned as an unsigned integer. If a non-integer number of quarter notes can be fit into a measure, the value should be floored. DO NOT RETURN A NON INTEGER.

// The Given Time Signature:

// Will not be malformed
// Will have a top number below 4096
// Will have a bottom number below 256
// All valid time signatures must have a bottom number that is a power of 2. If the given signature is invalid, return None in Python, null in TypeScript, return -1 in C.

// If less then one quarter note can be fit in a measure, return 0;

// Examples:

// "3/4" → 3

// "7/8" → 3

// "11/8" → 5

// "10/7" → None/null/-1

// "3/16" → 0


export function findQuarterNotes(timeSignature: string): number|null {
    const [top_str, bottom_str] = timeSignature.split('/');
    const top = Number(top_str);
    const bottom = Number(bottom_str);

    if (bottom <= 0 || (bottom & (bottom - 1)) !== 0) {
        return null;
    }

    return Math.floor((top * 4) / bottom);
}
