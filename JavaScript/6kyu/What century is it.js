// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"


function whatCentury(year) {
    const century = Math.ceil(year / 100);
    const suffix = (century >= 11 && century <= 13) ? 'th' :
        { 1: 'st', 2: 'nd', 3: 'rd' }[century % 10] || 'th';
  
    return century + suffix;
}