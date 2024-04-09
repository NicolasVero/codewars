// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


public class Convert_number_to_reversed_array_of_digits {

    public static int[] digitize(long n) {
        final int strLength = String.valueOf(n).length();
        int[] result = new int[strLength];

        for(int i = 0; i < strLength; i++) {
            result[i] = (int)(n % 10);
            n /= 10; 
        }

        return result;
    }
}