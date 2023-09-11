// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


public class BitCounting {

	public static int countBits(int n){
		
    String str = Integer.toBinaryString(n);
    
    int recurrence = 0;
    
    for(int i = 0; i < str.length(); i++)
        if(str.charAt(i) == '1')
            recurrence++;
        
    
        return recurrence;
	}
}