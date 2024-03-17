// Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.


using System.Collections.Generic; 

public class Slice_the_middle_of_a_list_backwards {
    public static List<int> ReverseMiddle(List<int> arr) {
        List<int> middleElements = new List<int>();

        int middleIndex = arr.Count / 2;
        int count = (arr.Count % 2 == 0) ? 2 : 3;
        
        middleElements = arr.GetRange(middleIndex - count / 2, count);
        middleElements.Reverse();

        return middleElements;
    }
}