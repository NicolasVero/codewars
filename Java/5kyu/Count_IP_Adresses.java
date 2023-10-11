// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50 
// * With input "10.0.0.0", "10.0.1.0"   => return  256 
// * With input "20.0.0.10", "20.0.1.0"  => return  246


public class Count_IP_Adresses {

    public static long ipsBetween(String start, String end) {
        String[] startParts = start.split("\\.");
        String[] endParts = end.split("\\.");

        long result = 0;

        for (int i = 0; i < startParts.length; i++) {
            long startValue = Long.parseLong(startParts[i]);
            long endValue = Long.parseLong(endParts[i]);
            result += (endValue - startValue) * Math.pow(256, 3 - i);
        }

        return result;
    }
}