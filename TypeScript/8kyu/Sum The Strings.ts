// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)


export function sumStr(a: string, b: string): string {
	return (
		convert_string_to_number(a) + convert_string_to_number(b)
	).toString();
}
  
export function convert_string_to_number(str: string): number {
	return (str !== '') ? parseInt(str) : 0;
}
