// Given an array of positive or negative integers

//  I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

// Example:
// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// Notes:

// It can happen that a sum is 0 if some numbers are negative!
// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.



function sumOfDivided(list) {
  
  if(list.length == 0) 
    return [];

  const primes = getPrime(list);
    
  let sorted_arr = [];
  
  for(let i = 0; i < primes.length; i++) {
    let result = 0;
    for(let j = 0; j < list.length; j++) {

      if(list[j] % primes[i] === 0) {
        result += list[j]
      }
    }

    sorted_arr.push([primes[i], result])
  }
  
  return sorted_arr;
    
    
  function getPrime(numbers) {
    var primes = generateAllPrimes(Math.max.apply(null, numbers.map(Math.abs)))
    var result = []
    
    numbers.forEach((e) => {
      for(let i = 0; i < primes.length; i++)            
        if(e % primes[i] === 0)
          result.push(primes[i]);
    });
    
    return Array.from(new Set(result)).sort((a, b) => a - b)
  }
  
  function generateAllPrimes(max) {
    
    const sieve = new Array(max + 1).fill(true);
    
    sieve[0] = false;
    sieve[1] = false;

    for (let p = 2; p * p <= max; p++) {
      if (sieve[p] === true) {
        for (let i = p * p; i <= max; i += p) {
          sieve[i] = false;
        }
      }
    }

    const primes = [];
    for (let i = 2; i <= max; i++) {
      if (sieve[i] === true) {
        primes.push(i);
      }
    }

    return primes;
  }

  
}