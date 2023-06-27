// For any given linear sequence, calculate the function [f(x)] and return it as a string.

// Assumptions for this kata are:

// the sequence argument will always contain 5 values equal to f(0) - f(4).
// the function will always be in the format "nx +/- m", "x +/- m", "nx', "x" or "m"
// if a non-linear sequence simply return "Non-linear sequence" or Nothing in Haskell.
// Examples (input -> output):
// [0, 1, 2, 3, 4]   -> "f(x) = x"
// [0, 3, 6, 9, 12]  -> "f(x) = 3x"
// [1, 4, 7, 10, 13] -> "f(x) = 3x + 1"
// [0, 0, 1, 1, 1]   -> "Non-linear sequence"


function getFunction(sequence) {
    function getCoefficient(sequence) {
      const coefficient = Math.abs(sequence[1] - sequence[0]);
      
      for (let i = 1; i < sequence.length - 1; i++) {
        if (Math.abs(sequence[i + 1] - sequence[i]) !== coefficient) {
          return null;
        }
      }
      
      return (sequence[0] < sequence[sequence.length - 1]) ? coefficient : -coefficient;
    }
    
    function getCString(coefficient) {
      if (coefficient === 1 ) return 'x';
      if (coefficient === -1) return '-x';
      if (coefficient !== 0 ) return `${coefficient}x`;
      return '';
    }
    
    let coefficient = getCoefficient(sequence);
    if (coefficient === null) return 'Non-linear sequence';
    
    let ordonnee = sequence[0];
    let symbol = ordonnee >= 0 ? ' + ' : ' - ';
    
    if(ordonnee === 0 || coefficient === 0) symbol = '';
    
    let c = getCString(coefficient);
    let o = Math.abs(ordonnee) !== 0 ? Math.abs(ordonnee) : '';
    
    return `f(x) = ${c}${symbol}${o}`;
}