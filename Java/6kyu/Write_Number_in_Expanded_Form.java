// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// Kata.expandedForm(12); # Should return "10 + 2"
// Kata.expandedForm(42); # Should return "40 + 2"
// Kata.expandedForm(70304); # Should return "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.


public class Write_Number_in_Expanded_Form {
    public static String expandedForm(int num) {

        String s = String.valueOf(num);
        String list = "";
        
        for(int i = 0; i < s.length(); i++) {
            if(s.charAt(i) != '0') {
                list += completeNumber(s.charAt(i), s.length() - i - 1);
            
                if(i < s.length() - 1)
                    list += " + ";
            }
        }
        
        if(list.length() > 1)
            if(list.charAt(list.length() - 2) == '+')
                return list.substring(0, list.length() - 3);
        
        return list;
    }
  
    public static String completeNumber(char number, int length) {
        String s = "" + number;
        while(length > 0) {
            s += "0";
            length--;
        }
        
        return s;
    }
}