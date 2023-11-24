// We need a function that receives an array or list of integers (positive and negative) and may give us the following information in the order and structure presented below:

// [(1), (2), (3), [[(4)], 5]]

// (1) - Total amount of received integers.

// (2) - Total amount of different values the array has.

// (3) - Total amount of values that occur only once.

// (4) and (5) both in a list

// (4) - It is (or they are) the element(s) that has (or have) the maximum occurrence. If there are more than one, the elements should be sorted (by their value obviously)

// (5) - Maximum occurrence of the integer(s)

// Let's see some cases:

// for list [-3, -2, -1, 3, 4, -5, -5, 5, -1, -5] ----> [10, 7, 5, [[-5], 3]]

// (1) - The list has ten elements (10 numbers)

// (2) - We have seven different values: -5, -3, -2, -1, 3, 4, 5 (7 values)

// (3) - The numbers that occur only once: -3, -2, 3, 4, 5 (5 values)

// (4) and (5) - The number -5 occurs three times (3 occurrences)



// for list [4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5] ----> [14, 8, 4, [[2, 4], 3]]


using System;
using System.Linq;

public class Kata {
    public static object[] CountSel(int[] lst) {
      
        int totalIntegers = lst.Length;
        int totalDifferentValues = lst.Distinct().Count();
        int totalValuesOccurOnce = lst.GroupBy(x => x).Count(group => group.Count() == 1);

        var maxOccurrences = lst.GroupBy(x => x)
                                .OrderByDescending(group => group.Count())
                                .First()
                                .Count();

        var maxOccurringElements = lst.GroupBy(x => x)
                                      .Where(group => group.Count() == maxOccurrences)
                                      .Select(group => group.Key)
                                      .OrderBy(x => x)
                                      .ToArray();

        object[] result = { totalIntegers, totalDifferentValues, totalValuesOccurOnce, new object[] { maxOccurringElements, maxOccurrences } };
        return result;
    }
}

