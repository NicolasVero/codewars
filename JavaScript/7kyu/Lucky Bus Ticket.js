// In Russia regular bus tickets usually consist of 6 digits. The ticket is called lucky when the sum of the first three digits equals to the sum of the last three digits. Write a function to find out whether the ticket is lucky or not. Return true if so, otherwise return false. Consider that input is always a string. Watch examples below.

// isLucky('123321') => 1+2+3 = 3+2+1 => true // The ticket is lucky
// isLucky('12341234') => false // Only six-digit numbers allowed :(
// isLucky('12a21a') => false // Letters are not allowed :(
// isLucky('100200') => false // :(
// isLucky('22') => false // :(
// isLucky('abcdef') => false // :(

function isLucky(ticket) {
    if(!/^\d{6}$/.test(ticket)) {
        return false;
    }
  
    return calculate_sum(ticket.slice(0, 3)) === calculate_sum(ticket.slice(3));
}
  
function calculate_sum(ticket_part) {
    return ticket_part.split('').reduce((sum, num) => sum + parseInt(num, 10), 0);
}