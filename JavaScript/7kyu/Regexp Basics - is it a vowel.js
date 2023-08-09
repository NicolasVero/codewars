// Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.

String.prototype.vowel = function() {
    const voyelles = ['a', 'e', 'i', 'o', 'u'];
    return voyelles.includes(this.valueOf().toLowerCase())
};