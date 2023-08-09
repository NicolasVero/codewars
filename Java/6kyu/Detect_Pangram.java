// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


import java.util.*;
public class Detect_Pangram {

    public boolean check(String sentence){
        
        ArrayList<Character> alphabet = new ArrayList<>(Arrays.asList('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'));
        ArrayList<Character> letters = new ArrayList<Character>();
        sentence = sentence.toLowerCase();
        
        for(int i = 0; i < sentence.length(); i++) {
            if(inArray(alphabet, sentence.charAt(i)) && !inArray(letters, sentence.charAt(i)))
                letters.add(sentence.charAt(i));
        }
        
        return letters.size() == 26;
  }
  
    public static boolean inArray(ArrayList<Character> array, char c) {
        for(int i = 0; i < array.size(); i++)
            if(array.get(i) == c)
                return true;
        
        return false;
    }
}

