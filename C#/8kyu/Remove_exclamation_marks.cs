// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


public class Remove_exclamation_marks {
    public static string RemoveExclamationMarks(string s) {
    
        string finalString = "";
        for(int i = 0; i < s.Length; i++)
            if(s[i] != '!')
                finalString += s[i];
    
        return finalString;
    }
}