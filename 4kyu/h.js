function sumOfDivided(list) {
  
    const primes = getPrime(Math.max(...list));
      
      let sorted_arr = [];
    
      for(let i = 0; i < primes.length; i++) {
        console.log("N : " + primes[i])
        let result = 0;
        for(let j = 0; j < list.length; j++) {
          
          if(list[j] % primes[i] === 0) {
            result += list[j]
          }
          console.log(list[j] + " % " + primes[i] + " = " + list[j] % primes[i])
        }
        
        sorted_arr.push([primes[i], result])
        console.log("RESULT : " + result)
      }
    console.log(sorted_arr)
    return sorted_arr;
    
    
    function getPrime(max) {
      
      var primes = [2,3,5,7,11,13,17,19,23,29];
      var result = [];
      
      while(true) {
        for(let i = 0; i < primes.length; i++) {
          if(max === 1) {
            console.log("RESULTAT")
            console.log(result)
            console.log(Math.max(...result))
            console.log("RESULTAT 2")
            console.log(result.indexOf(Math.max(...result)))
            return primes.slice(0, result.indexOf(Math.max(...result)) + 2)
  
          }
            
          if(max % primes[i] === 0) {
            result.push(primes[i])
            max = Math.floor(max / primes[i])
            i = 0;
          }
        }
      }
      console.log("MAX : " + max)
      
      
    }
  }
   




























  function sumOfDivided(list) {
  
    const primes = getPrime(Math.max(...list));
      
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
      
    function getPrime(max) {
      
      var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251];
      var result = [];
      
      while(true) {
        for(let i = 0; i < primes.length; i++) {
          if(max === 1) 
            return primes.slice(0, result.indexOf(Math.max(...result)) + 2)
            
          if(max % primes[i] === 0) {
            result.push(primes[i])
            max = Math.floor(max / primes[i])
            i = 0;
          }
        }
      }    
    }
    
  }
   