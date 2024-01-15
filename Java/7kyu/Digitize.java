// Given a non-negative integer, return an array / a list of the individual digits in order.

// Examples:

// 123 => [1,2,3]

// 1 => [1]

// 8675309 => [8,6,7,5,3,0,9]


public class Digitize {
    public static int[] digitize(int n) {
        
        String digit = Integer.toString(n);
        int[] digits = new int[digit.length()];
        
        for(int i = 0; i < digits.length; i++) 
            digits[i] = (int) digit.charAt(i) - 48;    

        return digits;
    }
}