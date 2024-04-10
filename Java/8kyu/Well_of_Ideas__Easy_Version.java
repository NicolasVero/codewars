// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


public class Well_of_Ideas__Easy_Version {

    public static String well(String[] x) {
        
        int good = 0;
        
        for(int i = 0; i < x.length; i++)
            if(x[i].equals("good"))
                good++;
        
        if(good == 1 || good == 2) 
            return "Publish!";
        
        if(good > 2) 
            return "I smell a series!";
        
        return "Fail!";
    }
}