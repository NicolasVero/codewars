// Task
// Given any positive integer x ≤ 4000, find the smallest positive integer m such that mx consists of all 9's. Return -1 if no such m exists.

// Examples:
// 11 -> 9, because 11 * 9 == 99.

// 12 -> -1, because 12 is even, so no multiple of it can contain only nines.

// 13 -> 76923, because 13 * 76923 == 999999, and no smaller positive integer, when multiplied by 13, generates an integer containing only nines.

// NOTE: Although x ≤ 4000, m can be very very LARGE. Where necessary, the way of handling big integers appropriate to the language should be used.


function allNines(x) {
    if (x % 2n === 0n || x % 5n === 0n) {
        return -1n;
    }

    let rem = 0n;
    let m   = 0n;

    while (true) {
        rem = rem * 10n + 9n;
        
        const digit = rem / x;
        m = m * 10n + digit;
        rem = rem % x;

        if (rem === 0n) {
            break;
        }
    }

    return m;
}
