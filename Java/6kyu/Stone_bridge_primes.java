import java.util.TreeSet;

public class Stone_bridge_primes {
    public static int solve(int x, int y) {
        TreeSet<Integer> specialPrimes = new TreeSet<>();
        
        for (int m = 0; ; m++) {
            long pow2 = 1L << m; 
            if (pow2 > y - 1) {
                break;
            }
          
            long pow3 = 1;
            for (int n = 0; ; n++) {
                long candidate = pow2 * pow3 + 1;
                if (candidate >= y) { 
                    break;
                }

                if (candidate >= 2 && isPrime(candidate)) {
                    specialPrimes.add((int) candidate);
                }

                pow3 *= 3;

                if (pow2 * pow3 + 1 >= y) { 
                    break;
                }
            }
        }
        
        int count = 0;
        for (Integer prime : specialPrimes) {
            if (prime >= x) {
                count++;
            }
        }
        return count;
    }
    
    private static boolean isPrime(long n) {
        if(n < 2) {
            return false;
        }
      
        if(n == 2 || n == 3) {
            return true;
        }
      
        if(n % 2 == 0) {
            return false;
        }
      
        for (long i = 3; i * i <= n; i += 2) {
            if(n % i == 0) {
                return false;
            }
        }
      
        return true;
    }
}
