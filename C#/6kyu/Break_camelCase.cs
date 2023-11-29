// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


using System;

public class Kata {
    public static string BreakCamelCase(string str) {
        string newString = "";
    
        for(int i = 0; i < str.Length; i++) 
            newString += ((int) str[i] >= 65 && (int) str[i] <= 90) ? " " + str[i] : str[i];
    
        return newString;
    }
}