// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.


public class Move_10 {
    public static String moveTen(String s) {
        
        String newString = "";
        
        for(int i = 0; i < s.length(); i++)      
            newString += (char) ((s.charAt(i) - 'a' + 10) % 26 + 'a');
        
        return newString;
    }
}