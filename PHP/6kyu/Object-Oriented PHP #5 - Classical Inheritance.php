<!-- Task

I. Preloaded
Preloaded for you in this exercise is a working solution for Kata #4 of this Series (you may want to complete that before continuing on this exercise).

II. Inheritance Model in this Kata
Before we write any actual code for the classes in this Kata, please declare the following classes:

Salesman
ComputerProgrammer
WebDeveloper
The following information is also given about the classes (use classical inheritance when necessary and don't extends the wrong class ;) ):

A Salesman "is a" Person
A ComputerProgrammer "is a" Person
A WebDeveloper "is a" Person
A WebDeveloper "is a" ComputerProgrammer
III. Class Details
Salesman
Class Constructor
The class constructor of the Salesman class should accept exactly two arguments in the following order: $name, $age. It should then set the correct properties accordingly. As for the $occupation of a Salesman, it will always be "Salesman" without exception.

introduce (Method)
The introduce method of the Salesman class should return a string of the format "Hello, my name is NAME_HERE, don't forget to check out my products!"

Hint: The string that the introduce method of the parent class returns is a substring of what the introduce method of this class returns.

ComputerProgrammer
Class Constructor
The class constructor of ComputerProgrammer should accept exactly 2 arguments in the following order: $name, $age and should set the correct properties accordingly. The $occupation of a ComputerProgrammer is always "Computer Programmer" without exception.

describe_job (Method)
The describe_job method of a ComputerProgrammer should return a string of the format "I am currently working as a(n) OCCUPATION_HERE, don't forget to check out my Codewars account ;)"

Hint: The same method of the parent class returns a substring of what this method should return.

WebDeveloper
Class Constructor
The class constructor of this class should receive two arguments in the following order: $name, $age and set the correct properties accordingly. The $occupation of a WebDeveloper is always "Web Developer" without exception.

Hint: You may have to add a line of code in the constructor of this class to override the constructor of the parent class.

describe_job (Method)
The describe_job method of a WebDeveloper should return a string of the format "I am currently working as a(n) OCCUPATION_HERE, don't forget to check out my Codewars account ;) And don't forget to check on my website :D"

Hint: The same method of the parent class returns a substring of what this method should return.

Watch out! Make sure you know which class parent is referring to in this case before you use it in your method definition!

describe_website (Method)
This method should return "My professional world-class website is made from HTML, CSS, Javascript and PHP!" -->


<?php 

class Salesman extends Person {
	
	public function __construct($name, $age) {
	  	parent::__construct($name, $age, "Salesman");
	}

	public function introduce() {
	  	return "Hello, my name is $this->name, don't forget to check out my products!";
	}
}
  
  
class ComputerProgrammer extends Person {
	
	public function __construct($name, $age, $occupation = "Computer Programmer") {
		parent::__construct($name, $age, $occupation);
	}

	public function describe_job() {
		return "I am currently working as a(n) $this->occupation, don't forget to check out my Codewars account ;)";
	}
}

  
class WebDeveloper extends ComputerProgrammer {  

	public function __construct($name, $age) {
		parent::__construct($name, $age, "Web Developer");
	}
	
	public function describe_job() {
		return parent::describe_job() . " And don't forget to check on my website :D";
	}
  
	public function describe_website() {
		return "My professional world-class website is made from HTML, CSS, Javascript and PHP!";
	}
}