<!-- Agent 47, you have a new task!
Among citizens of the city X are hidden 2 dangerous criminal twins.
Your task is to identify them and eliminate!

Everyone except the twins are single-born (i.e., unique individuals).

Given an array of integers, your task is to find two same numbers and return one of them. For example, in the array ```` the answer is 2.

If there are no twins in the city - return None or the equivalent in the language that you are using. -->

<?php

function elimination($arr) {
	foreach(array_count_values($arr) as $num => $count) {
		if($count === 2) {
			return $num;
		}
	}

	return null;
}
