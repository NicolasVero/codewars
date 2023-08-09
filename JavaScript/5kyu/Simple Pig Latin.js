// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


function pigIt(str) {
    const excepts = [',', ';', '.', ':', '?', '!'];
    const words = str.split(' ');
    let new_strings = [];
    
    words.forEach((word) => {
        if(excepts.includes(word)) 
            new_strings.push(word);
        else 
            new_strings.push(word.substring(1, word.length) + word.charAt(0) + 'ay');
    });
    
    return new_strings.join(' ');
}