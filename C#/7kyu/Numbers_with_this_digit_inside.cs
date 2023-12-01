// You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
// The value of d will always be 0 - 9.
// The value of x will always be greater than 0.

// You have to return as an array

// the count of these numbers,
// their sum
// and their product.

// For example:
// x = 11
// d = 1
// ->
// Numbers: 1, 10, 11
// Return: [3, 22, 110]

// If there are no numbers, which include the digit, return [0,0,0].


using System;
using System.Collections.Generic;
using System.Linq;

public class Kata {
    public static long[] NumbersWithDigitInside(long x, int d) {
            
        List<long> matchingNumbers = new List<long>();

        for(long i = 1; i <= x; i++)
            if (i.ToString().Contains(d.ToString()))
                matchingNumbers.Add(i);
            
        if(matchingNumbers.Count == 0)
            return new long[] { 0, 0, 0 };

        return new long[] { 
            matchingNumbers.Count, 
            matchingNumbers.Sum(), 
            matchingNumbers.Aggregate(1L, (acc, num) => acc * num) 
        };    
    }
}