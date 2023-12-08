// 2-Sum is a common task to find the pair of integers in the array such that their sum equals to the target.

// array = [1,2,3,4,5]
// target = 7

// Pair is (2, 5)
// Task
// There is an array of unique integers.

// The task is to find the sum of all targets in the specific range [from, to), which has a pair in the array, such that sum of the pair equals to the target.

// Example
// Array = [2, 4, 6, 10], target range is [6, 10)

// target = 6  =>  (2, 4)
// target = 7  =>  no pair
// target = 8  =>  (2, 6)
// target = 9  =>  no pair

// So the result is: 6 + 8 = 14
// Notes
// Both elements of the pair must be unique
// Each target will be counted once, even though there may exist multiple pairs which add up to it
// Your solution will be tested for performance


using System;
using System.Collections.Generic;

public class TwoSum {
    public int SumOfTwoSumTargets(int[] numbers, int min, int max) {
      
        HashSet<int> set = new HashSet<int>(numbers);
        int result = 0;

        for (int target = min; target < max; target++)
            if (HasPairWithTarget(set, target))
                result += target;
            
        return result;
    }

    private bool HasPairWithTarget(HashSet<int> set, int target) {
        
        foreach (int num in set) {
            int complement = target - num;
        
            if (set.Contains(complement) && complement != num)
                return true;
        }

        return false;
    }
}