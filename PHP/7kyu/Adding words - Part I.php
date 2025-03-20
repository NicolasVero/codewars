<!-- This is the first part of this kata series. Second part is here and third part is here

Add two English words together!

Implement a class Arith (struct struct Arith{value : &'static str,} in Rust) such that

  //javascript
  var k = new Arith("three");
  k.add("seven"); //this should return "ten" 
Input - Will be between zero and ten and will always be in lower case

Output - Word representation of the result of the addition. Should be in lower case -->


<?php

class Arith {
	private $value;
	private static $wordsToNumbers = [
		"zero" => 0, "one" => 1, "two" => 2, "three" => 3, "four" => 4,
		"five" => 5, "six" => 6, "seven" => 7, "eight" => 8, "nine" => 9, "ten" => 10
	];
	private static $numbersToWords = [
		0 => "zero", 1 => "one", 2 => "two", 3 => "three", 4 => "four",
		5 => "five", 6 => "six", 7 => "seven", 8 => "eight", 9 => "nine", 10 => "ten",
		11 => "eleven", 12 => "twelve", 13 => "thirteen", 14 => "fourteen", 15 => "fifteen",
		16 => "sixteen", 17 => "seventeen", 18 => "eighteen", 19 => "nineteen", 20 => "twenty"
	];

	public function __construct($word) {
		$this->value = self::$wordsToNumbers[$word] ?? null;
	}

	public function add($word) {
		if (!isset(self::$wordsToNumbers[$word])) {
			throw new InvalidArgumentException("Invalid input word.");
		}

		$sum = $this->value + self::$wordsToNumbers[$word];
		return self::$numbersToWords[$sum] ?? "out of range";
	}
}
