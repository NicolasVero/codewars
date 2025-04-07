// Implement String#six_bit_number?, which should return true if given object is a number representable by 6 bit unsigned integer (0-63), false otherwise.

// It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.


interface String {
    sixBitNumber(): boolean;
}
  
String.prototype.sixBitNumber = function(this: string): boolean {
    if (!/^(0|[1-9]\d*)$/.test(this)) {
        return false;
    }

    const num = Number(this);
    return num >= 0 && num <= 63;
};
