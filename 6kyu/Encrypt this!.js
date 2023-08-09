// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"


var encryptThis = function(text) {

    const words = text.split(' ');
    let new_words = [];
  
    words.forEach((word) => {
        let string = word.charCodeAt(0);
    
        if(word.length > 1) {
            string += word.charAt(word.length - 1);
            if(word.length > 2) {
                string += word.substring(2, word.length - 1);
                string += word.charAt(1);
            }
        }
        new_words.push(string);
    });
    
    return new_words.join(' ');
}