// Instructions
// Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.

// Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

// Lyrics
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.

// ...and so on...

// 3 bottles of beer on the wall, 3 bottles of beer.
// Take one down and pass it around, 2 bottles of beer on the wall.

// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.

// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.

// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.

// Example
// [ "99 bottles of beer on the wall, 99 bottles of beer.",
//   "Take one down and pass it around, 98 bottles of beer on the wall.",
//   "98 bottles of beer on the wall, 98 bottles of beer.",

//   ...and so on...

//   "3 bottles of beer on the wall, 3 bottles of beer.",
//   "Take one down and pass it around, 2 bottles of beer on the wall.",
//   "2 bottles of beer on the wall, 2 bottles of beer.",
//   "Take one down and pass it around, 1 bottle of beer on the wall.",
//   "1 bottle of beer on the wall, 1 bottle of beer.",
//   "Take one down and pass it around, no more bottles of beer on the wall.",
//   "No more bottles of beer on the wall, no more bottles of beer.",
//   "Go to the store and buy some more, 99 bottles of beer on the wall." ]


const sing = function () {
    let res = [];
    
    for(let i = 99; i > 0; i--) {
        const b = (i == 1) ? "bottle" : "bottles";
        const n = i - 1;
        const nb = (n == 1) ? "bottle" : "bottles";
        
        res.push(`${i} ${b} of beer on the wall, ${i} ${b} of beer.`);
        res.push(`Take one down and pass it around, ${(n > 0) ? n + ' ' + nb : 'no more bottles'} of beer on the wall.`);
    }
    
    res.push("No more bottles of beer on the wall, no more bottles of beer.");
    res.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
    
    return res;
};
