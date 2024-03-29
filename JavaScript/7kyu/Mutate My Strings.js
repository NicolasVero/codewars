// I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

// Example:

// stringOne = 'bubble gum';
// stringTwo = 'turtle ham';

// Result:
// bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham


function mutateMyStrings(stringOne, stringTwo){
  
    let result = stringOne + '\n';
    while(stringOne != stringTwo) {
        for(let i = 0; i < stringOne.length; i++) {
            
            if(stringOne.charAt(i) != stringTwo.charAt(i)) {
                
                stringOne = stringOne.split('');
                stringOne[i] = stringTwo.charAt(i);
                stringOne = stringOne.join('');
                
                result += stringOne + '\n';
                break;
            }
        }      
    }
    
    return result;
}