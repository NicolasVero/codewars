// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
    
    let hashtag = '#';
    let words = str.split(' ').filter(word => word !== "");
  
    if(str.length === 0 || /^\s*$/.test(str) || get_length(words) >= 140)
        return false;
     
    words.forEach((word) => {
        hashtag += word.charAt(0).toUpperCase() + word.slice(1, word.length);
    });
    
    return hashtag;
    
    
    function get_length(array) {
        return array.reduce((totalLength, element) => totalLength + element.length, 0);
    }
}