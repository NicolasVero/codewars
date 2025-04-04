// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]
// Good luck!


function scrollingText(text) {
    const texts = [];
    const upperText = text.toUpperCase();

    for (let i = 0; i < upperText.length; i++) {
        texts.push(upperText.slice(i) + upperText.slice(0, i));
    }

    return texts;
}  
