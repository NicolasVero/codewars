// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


public class DuplicateEncoder {
	static String encode(String word){
    
        word = word.toLowerCase();
        String n_word = ""; 
        
        for(int i = 0; i < word.length(); i++)
            n_word += (isUnique(word.charAt(i), word)) ? "(" : ")"; 
            
        return n_word;
    }
  
    static boolean isUnique(char c, String word) {
        int count = 0;
        for(int i = 0; i < word.length(); i++)
            if(word.charAt(i) == c)
                count++;
    
        return count <= 1;
    }
}
