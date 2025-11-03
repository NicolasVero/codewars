// Create a function that takes three arguments:

// a value to be evaluated for truthiness.
// a function to execute if the first argument is truthy.
// a function to execute if the first argument is falsy.
// If the first argument evaluates to truthy, call the second argument (a function). If it evaluates to falsy, call the third argument instead (also a function).

// Note: The first argument can be any value, since most languages allow any value to be interpreted as truthy or falsy. In strongly typed languages, however, it will typically be a boolean.

// Functional ProgrammingFundamentals

public class The_if_function {
    public static void _if(Boolean bool, Runnable func1, Runnable func2) {
        (bool != null && bool ? func1 : func2).run();
    }
}
