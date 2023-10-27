using System;

public class Kata {
    public static string Letter_Triangle(string row) {
        char[] alphabetic = getAlphabeticArray();

        while (row.Length > 1) {
            string newString = "";

            for (int i = 0; i < row.Length - 1; i++) {
                int sum = (Array.IndexOf(alphabetic, row[i]) + Array.IndexOf(alphabetic, row[i + 1]) + 1) % 26;
                newString += alphabetic[sum];     
            }
         
            row = newString;
        }
        return row;
    }

    public static char[] getAlphabeticArray() {
        char[] alphabetic = new char[26];
        for (int i = 97; i < 123; i++)
            alphabetic[i - 97] = Convert.ToChar(i);

        return alphabetic;
    }
}