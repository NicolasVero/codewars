// There are no explanations. You have to create the code that gives the following results in Python, Ruby, and Haskell:

// one_two_three(0) == [0, 0]
// one_two_three(1) == [1, 1]
// one_two_three(2) == [2, 11]
// one_two_three(3) == [3, 111]
// one_two_three(19) == [991, 1111111111111111111]
// And it should give the following results in Javascript, Scala, D, Go, Rust, C, and Java:

// oneTwoThree(0) == ['0', '0']
// oneTwoThree(1) == ['1', '1']
// oneTwoThree(3) == ['3', '111']
// oneTwoThree(19) == ['991', '1111111111111111111']
// In C, the results are to be assigned to seperate pointers.



function oneTwoThree(n) {
     
    const repeater = (n == 0) ? 0 : '1'.repeat(n);
    let decomposer = '';
  
    while(n >= 9) {
        decomposer += '9';
        n -= 9; 
    }

    if(n > 0 || decomposer.length == 0)
        decomposer += n;

    return [decomposer + '', repeater + ''];
}
