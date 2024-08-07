import java.util.HashMap;
import java.util.Map;

public class The_Office_II_Boredom_Score {
    public static String boredom(Person[] staff) {
        
        Map<String, Integer> departments = Map.of(
            "accounts", 1,
            "finance", 2,
            "canteen", 10,
            "regulation", 3,
            "trading", 6,
            "change", 6,
            "IS", 8,
            "retail", 5,
            "cleaning", 4,
            "pissing about", 25
        );

        int totalBoredom = 0;

        for (Person person : staff) 
            totalBoredom += departments.getOrDefault(person.department, 0);

        if(totalBoredom <= 80) return "kill me now"; 
        if(totalBoredom < 100) return "i can handle this";

        return "party time!!";
    }
}