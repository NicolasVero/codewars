// There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

// A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

// As a simplification, you may assume that no letter occurs more than once in the secret string.

// You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.



var recoverSecret = function(triplets) {
  
    const length = getLength(triplets);
    let firstLetters = [];
    let resultat = '';
    
    while(resultat.length < length) {
    
        firstLetters = [];
        triplets.forEach((e) => {
            if(e.length > 0)
            firstLetters.push(e[0]);    
        })
        
        if(firstLetters.length <= 1 && resultat.length === length - 1) 
            return resultat + firstLetters[0];
            
        firstLetters = firstLetters.filter((x, i) => firstLetters.indexOf(x) === i);
    
        triplets.forEach((e) => {
            for(let i = 1; i < e.length; i++) 
            if(firstLetters.includes(e[i])) 
                firstLetters = firstLetters.filter((letter) => (letter !== e[i]));
        });
    
        triplets = triplets.map((e) => {
            return e.filter((letter) => letter !== firstLetters[0]);
        });
    
        resultat += firstLetters[0];    
    }
    
    return resultat;
    
    function getLength(triplets) {
        let arr = [];
        
        triplets.forEach((e) => {
            arr = arr.concat(e);
        })
        
        return arr.filter((x, i) => arr.indexOf(x) === i).length;
    }
}