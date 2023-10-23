// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"



class Give_me_a_Diamond {
    public static String print(int n) {
    
        if (n % 2 == 0 || n < 0) return null;

        StringBuilder diamond = new StringBuilder();

        for (int i = 1; i <= n; i += 2) {
            int spaces = (n - i) / 2;
            int stars = i;
            diamond.append(generateLine(spaces, stars));
        }

        for (int i = n - 2; i >= 1; i -= 2) {
            int spaces = (n - i) / 2;
            int stars = i;
            diamond.append(generateLine(spaces, stars));
        }

        return diamond.toString();
    }

    private static String generateLine(int spaces, int stars) {
        String spaceStr = " ".repeat(spaces);
        String starStr = "*".repeat(stars);
        return spaceStr + starStr + "\n";
    }
}