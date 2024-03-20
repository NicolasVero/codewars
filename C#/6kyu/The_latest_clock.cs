// Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.

// The time should be in HH:MM format.

// Examples:

// digits: 1, 9, 8, 3 => result: "19:38"
// digits: 9, 1, 2, 5 => result: "21:59" (19:25 is also a valid time, but 21:59 is later)
// Notes
// Result should be a valid 24-hour time, between 00:00 and 23:59.
// Only inputs which have valid answers are tested.


using System;
using System.Collections.Generic;
using System.Linq;

public class Kata {
    public static string LatestClock(int a, int b, int c, int d) {
        List<int> digits = new List<int> { a, b, c, d };
        string hours = "";
        string minutes = "";

        hours += getMaximum(canTakeDigit2(digits) ? 2 : 1, digits);
        hours += getMaximum(hours == "2" ? 3 : 9, digits);

        minutes += getMaximum(5, digits);
        minutes += getMaximum(9, digits);

        return hours + ':' + minutes;
    }

    public static int getMaximum(int limit, List<int> digits) {
        int max = digits.Where(d => d <= limit).Max();
        digits.Remove(max);
        return max;
    }

    public static bool canTakeDigit2(List<int> digits) {
        if(!digits.Contains(2)) return true;

        int moreThan5 = digits.Count(digit => digit > 5);
        return moreThan5 < 2;
    }
}