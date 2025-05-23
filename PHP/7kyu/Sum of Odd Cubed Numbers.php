<!-- Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined/None/nil/NULL if any of the values aren't numbers. -->

<?php 


function cube_odd($a) {
    if (!is_array($a)) {
        return null;
    }

    $sum = 0;

    foreach ($a as $value) {
        if (!is_numeric($value) || intval($value) != $value) {
            return null;
        }

        $cube = $value ** 3;

        if ($cube % 2 !== 0) {
            $sum += $cube;
        }
    }

    return $sum;
}
