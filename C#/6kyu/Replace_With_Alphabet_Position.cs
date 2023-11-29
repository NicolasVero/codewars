// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Kata.AlphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


public static class Kata {
    public static string AlphabetPosition(string text) {
        string numbers = "";
        text = text.ToLower();
    
        for(int i = 0; i < text.Length; i++) 
            if(text[i] >= 'a' && text[i] <= 'z') 
                numbers += (int) text[i] - 96 + " ";
    
        return (numbers.Length > 0) ? numbers.Substring(0, numbers.Length - 1) : "";
    }
}