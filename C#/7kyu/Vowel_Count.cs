using System;
using System.Linq;

public static class Vowel_Count {
    public static int Vowel_Count(string str) {
        char[] vowel = {'a', 'e', 'i', 'o', 'u'};
        int vowelCount = 0;
      
        for(int i = 0; i < str.Length; i++)
            if(vowel.Contains(str[i]))
                vowelCount++;

        return vowelCount;
    }
}
