<!-- Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] -->

<?php

function moveZeros(array $array) {
    $count = 0;
  
    for ($i = 0; $i < count($array); $i++) 
        if ($array[$i] !== 0 && $array[$i] !== 0.0) 
            $array[$count++] = $array[$i];
    
  
    for ($i = $count; $i < count($array); $i++) 
        $array[$i] = 0;
  
    return $array;
}