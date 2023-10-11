// Given an array of positive or negative integers

//  I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

// Example:
// I = {12, 15}; // result = "(2 12)(3 27)(5 15)"
// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// Notes:

// It can happen that a sum is 0 if some numbers are negative!
// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.


import java.util.*;

public class Sum_by_Factors {

    public static String sumOfDivided(int[] list) {
        if (list.length == 0)
            return "";

        List<Integer> primes = getPrimes(list);
        List<String> result = new ArrayList<>();

        for (int prime : primes) {
            int primeSum = 0;
            boolean found = false;
            for (int num : list) {
                if (num % prime == 0) {
                    primeSum += num;
                    found = true;
                }
            }
            if (found) {
                result.add("(" + prime + " " + primeSum + ")");
            }
        }

        return String.join("", result);
    }

    private static List<Integer> getPrimes(int[] numbers) {
        Set<Integer> primes = new HashSet<>();
        for (int num : numbers) {
            List<Integer> primeFactors = getPrimeFactors(Math.abs(num));
            primes.addAll(primeFactors);
        }
        List<Integer> sortedPrimes = new ArrayList<>(primes);
        Collections.sort(sortedPrimes);
        return sortedPrimes;
    }

    private static List<Integer> getPrimeFactors(int n) {
        List<Integer> factors = new ArrayList<>();
        for (int i = 2; i <= n; i++) {
            while (n % i == 0) {
                factors.add(i);
                n /= i;
            }
        }
        return factors;
    }

}
