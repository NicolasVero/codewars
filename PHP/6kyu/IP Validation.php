<!-- Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string -->

<?php 

function isValidIP(string $str): bool {

    if(count(explode('.', $str)) != 4 || !isNumerical($str) || !isInRange($str))
        return false;

    return true;
}

function isNumerical(string $str): bool {
    for($i = 0; $i < strlen($str); $i++) 
        if(!is_numeric($str[$i]) && $str[$i] != '.') 
            return false;

    return true;
}

function isInRange(string $str): bool {
    $octets = explode('.', $str);
    foreach($octets as $octet) 
        if($octet < 0 || $octet > 255 || ($octet[0] == '0' && strlen($octet) > 1)) 
            return false;

    return true;
}