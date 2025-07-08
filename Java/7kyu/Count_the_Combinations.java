// Consider a sequence of integers xs, and a target integer n. Your task is to write a function which counts how many combinations of indexes of xs meet two rules:

// The size of the combination must be 1 less than the size of xs
// The sum of elements corresponding to the indexes must equal n
// For example:

// xs = [5, 0, 0, 2], n = 7

// All combinations of indexes (of size 3)
// {0, 1, 2} -> 5 + 0 + 0 = 5
// {0, 1, 3} -> 5 + 0 + 2 = 7
// {0, 2, 3} -> 5 + 0 + 2 = 7
// {1, 2, 3} -> 0 + 0 + 2 = 2

// Only 2 combinations match the target -> Answer = 2

public class Count_the_Combinations {
    public static int numCombo(int[] xs, int n) {
        int total = 0;
        for (int x : xs) {
            total += x;
        }

        int count = 0;
        for (int x : xs) {
            if (total - x == n) {
                count++;
            }
        }
        return count;
    }
}
