// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"


public class Stop_gninnipS_My_sdroW {
    
    public String spinWords(String sentence) {
    
        String[] words = sentence.split(" ");
        String new_string = "";
    
        for (String word : words) 
            new_string += (word.length() < 5) ? word + " " : reverseString(word) + " "; 
    
        return new_string.trim();
    }
    
    public static String reverseString(String string) {
        String reverse = "";
        for(int i = string.length() - 1; i >= 0; i--) 
            reverse += string.charAt(i);
      
      return reverse;
    }
}