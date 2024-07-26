// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function count(string) {
  
    const list = {};
    
    [...string].map((element) => {
        list[element] = get_occurence_count(string, element); 
    });
    
    return list;
      
    
    function get_occurence_count(word, letter) {
        return word.split(letter).length - 1;
    }    
}