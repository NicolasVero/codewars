<!-- In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false. -->


<?php

function periodIsLate(object $last, object $today, int $cycle_length): bool {
    $days_passed = ($today->getTimestamp() - $last->getTimestamp()) / 86400;
    return ($days_passed > $cycle_length);
}