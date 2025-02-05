// Task
// Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

// Notes
// The numbers (a,b) may be positive , negative values or zeros .

// Returning value will be an integer .

// Java: the following methods are prohibited: addExact, average, collect, decrement, increment, nextAfter, nextDown, nextUp, reduce, subtractExact, sum, summing . The following classes are prohibited: BigDecimal and BigInteger.

public class Sum_of_Two_Integers {
    public static int add(int x, int y) {
        while(y != 0) {
            int carry = x & y;
            x = x ^ y;
            y = carry << 1;
        }
        return x;
    }
}
