<!-- Description:
Remove all exclamation marks from the end of sentence.

Examples
"Hi!"     -> "Hi"
"Hi!!!"   -> "Hi"
"!Hi"     -> "!Hi"
"!Hi!"    -> "!Hi"
"Hi! Hi!" -> "Hi! Hi"
"Hi"      -> "Hi" -->

<?php

function remove(string $s): string {
    while($s[strlen($s) - 1] == '!')
        $s = substr($s, 0, -1);
  
    return $s;
}