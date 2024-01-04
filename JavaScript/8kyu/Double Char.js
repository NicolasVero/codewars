// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


function doubleChar(str) {
    let double_str = "";
    
    for(let i = 0; i < str.length; i++)
        double_str += str.charAt(i).repeat(2);
    
    return double_str;
} 