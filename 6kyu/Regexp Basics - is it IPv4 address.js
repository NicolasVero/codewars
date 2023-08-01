// Implement String#ipv4_address?, which should return true if given object is an IPv4 address - four numbers (0-255) separated by dots.

// It should only accept addresses in canonical representation, so no leading 0s, spaces etc.


String.prototype.ipv4Address = function() {
    const numbers = this.valueOf().split('.');
    return numbers.length === 4 && numbers.every(num => /^\d+$/.test(num) && Number(num) >= 0 && Number(num) <= 255 && (!num.startsWith('0') || num === '0'));
};