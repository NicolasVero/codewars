// Mount the Bowling Pins!
// Task:
// Did you ever play Bowling? Short: You have to throw a bowl into 10 Pins arranged like this:


// I I I I  # each Pin has a Number:    7 8 9 10
//  I I I                                4 5 6
//   I I                                  2 3
//    I                                    1

// You will get an Array with Numbers, e.g.: [3,5,9] and remove them from the field like this:


// I I   I
//  I   I
//   I   
//    I   

// Return a string with the current field.

// Note that:
// You begin a new line with \n
// Each Line must be 7 chars long
// Fill the missing pins with a whitespace


public class Bowling_Pins {
    public String bowlingPins(int[] arr) {
        
        for (int i = 0; i < arr.length; i++) 
            arr[i] = (arr[i] == 10) ? 0 : arr[i];
    
		char[][] fields = {
			{'7', ' ', '8', ' ', '9', ' ', '0'},
			{' ', '4', ' ', '5', ' ', '6', ' '},
			{' ', ' ', '2', ' ', '3', ' ', ' '},
			{' ', ' ', ' ', '1', ' ', ' ', ' '},
        };  
        
        
        for(int i = 10; i > 0; i--) {
			char character = Bowling_Pins.haveValueInArray(arr, i % 10) ? ' ' : 'I';
			fields = replaceFields(fields, i % 10, character);
        }
        
        return Bowling_Pins.buildString(fields);
    }
    
    private static String buildString(char[][] fields) {
        String result = "";
        
        for(int i = 0; i < fields.length; i++) {
			for(int j = 0; j < fields[i].length; j++) 
				result += fields[i][j];
			
			if(i < fields.length - 1)
				result += "\n";
        }

        return result;
    }
    
    private static boolean haveValueInArray(int[] arr, int value) {
        for(int i = 0; i < arr.length; i++)
        	if(arr[i] == value)
            	return true;
        
        return false;
    }
    
    private static char[][] replaceFields(char[][] arr, int value, char replace) {
        for(int i = 0; i < arr.length; i++) 
			for(int j = 0; j < arr[i].length; j++) 
				if(arr[i][j] == Character.forDigit(value, 10)) 
					arr[i][j] = replace;

        return arr;
    }  
}