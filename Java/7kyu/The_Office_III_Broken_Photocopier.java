// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.


public class The_Office_III_Broken_Photocopier {
    public static String broken(String x) {
        return x.replace('1', '2').replace('0', '1').replace('2', '0');
    }
}