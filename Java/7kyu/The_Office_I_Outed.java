public class The_Office_I_Outed {
    public static String outed(Person[] meet, String boss) {
            
        int totalHappiness = 0;
        
        for(Person person : meet) 
            totalHappiness += (person.name.equals(boss)) ? person.happiness * 2 : person.happiness;    
        
        return ((double) totalHappiness / meet.length <= 5) ? "Get Out Now!" : "Nice Work Champ!";
    }
}