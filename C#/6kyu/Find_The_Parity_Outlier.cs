// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)


using System.Collections.Generic;
using System.Linq;
using System;

public class Kata
{
    public static int Find(int[] numbers)
    {
        int remainder = (getRemainder(numbers) > 1) ? 1 : 0;
        
        for(int i = 0; i < numbers.Length; i++)
			if(numbers[i] % 2 == remainder)
				return numbers[i];
        
        return 0;
    }
    
    public static int getRemainder(int[] numbers) {
        int balance = 0;
        
        for(int i = 0; i < numbers.Length; i++)
        	balance += (numbers[i] % 2 == 0) ? 1 : -1;
        
        return balance;
    }

}