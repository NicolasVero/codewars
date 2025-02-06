// Egg Talk.

// Insert an egg after each consonant. If there are no consonants, there will be no eggs. Argument will consist of a string with only alphabetic characters and possibly some spaces.

// Example
// hello => heggeleggleggo

// eggs => egegggeggsegg

// FUN KATA => FeggUNegg KeggATeggA


function heggeleggleggo(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    return [...word].map((char) => {
        return (vowels.includes(char.toLowerCase()) || char === ' ') ? char : `${char}egg`;
    }).join('');
}
