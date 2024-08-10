// Implement a function that returns the minimal and the maximal value of a list (in this order).


import java.util.Arrays;
import java.util.List;

class Find_min_and_max {
    static int[] getMinMax(List<Integer> list) {
        int[] a = list.stream().mapToInt(i -> i).toArray();  
        Arrays.sort(a);
        
        return new int[]{a[0], a[a.length - 1]};
    }
}
