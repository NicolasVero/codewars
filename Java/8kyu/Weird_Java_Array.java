// I want to create an array of Lists of Integers, like so:

// import java.util.*;

// class Codewarrior {
//     public static List<Integer>[] arrayOfLists = new List<Integer>[] {
//         Arrays.asList(1, 2, 3),
//         Arrays.asList(4, 5, 6),
//         Arrays.asList(7, 8, 9),
//     };
// }
// However, this code does not compile :(

// Can you fix the code ?

// arrayOfLists should hold the 3 lists shown above, (1, 2, 3), (4, 5, 6), (7, 8, 9).


import java.util.*;

class Codewarrior {
    public static List<Integer>[] arrayOfLists = new List[] {
        Arrays.asList(1, 2, 3),
        Arrays.asList(4, 5, 6),
        Arrays.asList(7, 8, 9),
    };
}