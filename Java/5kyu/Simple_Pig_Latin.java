// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !



public class Simple_Pig_Latin {
    public static String pigIt(String str) {
      
        StringBuilder newString = new StringBuilder();
        String[] words = str.split(" ");
        
        for (String word : words) {
            if (word.matches("[a-zA-Z]+")) { 
                char firstChar = word.charAt(0);
                String restOfWord = word.substring(1);
                newString.append(restOfWord).append(firstChar).append("ay ");
            } else 
                newString.append(word).append(" ");
            
        }
        
        return newString.toString().trim();
    }
}