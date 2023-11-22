public class Find_the_missing_term_in_an_Arithmetic_Progression {
    public static int findMissing(int[] numbers) {

        int commonDifference = (numbers[numbers.length - 1] - numbers[0]) / numbers.length;

        for (int i = 0; i < numbers.length - 1; i++) 
            if (numbers[i + 1] - numbers[i] != commonDifference) 
                return numbers[i] + commonDifference;
        
        return numbers[0];
    }
}
