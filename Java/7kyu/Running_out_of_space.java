// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']


public class Running_out_of_space {
    public static String[] spacey(String[] array) {
        String s = "";
      
        for(int i = 0; i < array.length; i++) {
            s += array[i];
            array[i] = s;    
        }
      
        return array;
    }
}