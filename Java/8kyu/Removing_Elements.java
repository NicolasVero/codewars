// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


import java.util.ArrayList;
import java.util.List;

public class Removing_Elements {
    public static Object[] removeEveryOther(Object[] arr) {
        List<Object> resultList = new ArrayList<>();

        for(int i = 0; i < arr.length; i += 2) {
            resultList.add(arr[i]);
        }

        return resultList.toArray(new Object[0]);
    }
}