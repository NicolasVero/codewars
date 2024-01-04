// You are a khmmadkhm scientist and you decided to play with electron distribution among atom's shells. You know that basic idea of electron distribution is that electrons should fill a shell untill it's holding the maximum number of electrons.

// Rules:

// Maximum number of electrons in a shell is distributed with a rule of 2n^2 (n being position of a shell).
// For example, maximum number of electrons in 3rd shield is 2*3^2 = 18.
// Electrons should fill the lowest level shell first.
// If the electrons have completely filled the lowest level shell, the other unoccupied electrons will fill the higher level shell and so on.
// Ex.:    atomicNumber(1); should return [1]
//         atomicNumber(10); should return [2, 8]
//         atomicNumber(11); should return [2, 8, 1]
//         atomicNumber(47); should return [2, 8, 18, 19]


function atomicNumber(num){
    let shellIndex = 1;
    let shellCapacity = getCapacity(shellIndex);
    let results = [];
    
    while(num > 0) {  
        results.push(num > shellCapacity ? shellCapacity : num);    
        num -= shellCapacity;
        
        shellIndex++;
        shellCapacity = getCapacity(shellIndex);
    }
    
    return results
    
    function getCapacity(index) {
        return 2 * Math.pow(index, 2);
    }
}