// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.


function findUniq(arr) {
    const lowerCaseArr = arr.map((element) => {
        return element.toLowerCase();
    });
      
    let contains = [];
    
    if(allElementsHaveASizeOfOne(lowerCaseArr)) 
        contains.push(lowerCaseArr[0] === lowerCaseArr[1] ? lowerCaseArr[0] : lowerCaseArr[2]);
    else {
        for(let i = 0; i < lowerCaseArr[0].length; i++)
            if(!contains.includes(lowerCaseArr[0].charAt(i))) 
                contains.push(lowerCaseArr[0].charAt(i))
    }
    
    for(let i = 0; i < lowerCaseArr.length; i++) 
        for(let j = 0; j < lowerCaseArr[i].length; j++) 
            if(!contains.includes(lowerCaseArr[i].charAt(j))) 
                return arr[i];
  
    return arr[0];
    
    function allElementsHaveASizeOfOne(arr) {
        for(let i = 0; i < arr.length; i++)
            if(arr[i].length > 1)
                return false;
      
        return true;
    }
}