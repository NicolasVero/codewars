// Toggle, Set, and Clear Bits
// Your task is to implement a collection of utility functions that perform common bitwise operations on integers. All bit positions are zero-based, meaning position 0 refers to the least significant bit.

// Toggles (flips) the bit at the given position. If the bit is 0, it becomes 1; if it is 1, it becomes 0.

// console.log(toggleBit(5, 1)); // 7
// Sets the bit at the given position to 1, without modifying other bits.

// console.log(setBit(5, 1)); // 7
// Clears (sets to 0) the bit at the given position, leaving all other bits unchanged.

// console.log(clearBit(7, 1)); // 5
// Checks whether the bit at the given position is set to 1. Returns true if it is set, otherwise false.

// console.log(isBitSet(5, 0)); // true
// Sets all bits to 1 wherever the mask has 1s.

// console.log(setMultipleBits(5, 3)); // 7
// Clears all bits wherever the mask has 1s.

// console.log(clearMultipleBits(7, 2)); // 5
// Toggles all bits wherever the mask has 1s.

// console.log(toggleMultipleBits(5, 3)); // 6


const toggleBit = (n, position) => n ^ (1 << position);
const setBit = (n, position) => n | (1 << position);
const clearBit = (n, position) => n & ~(1 << position);
const isBitSet = (n, position) => ((n >> position) & 1) === 1;
const setMultipleBits = (n, mask) => n | mask;
const clearMultipleBits = (n, mask) => n & ~mask;
const toggleMultipleBits = (n, mask) => n ^ mask;
