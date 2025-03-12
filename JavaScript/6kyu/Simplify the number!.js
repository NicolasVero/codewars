// Given a positive integer as input, return the output as a string in the following format:

// Each digit (from left to right) multiplied by the corresponding power of 10, so that the sum equals the input number.

// If the digit is zero, exclude it from the output;
// For the last digit, just use the digit itself, without *1.
// Examples
// 0     -->  ""
// 56    -->  "5*10+6"
// 60    -->  "6*10"
// 999   -->  "9*100+9*10+9"
// 10004 -->  "1*10000+4"
// Note: input >= 0


function simplify(number) {
	if (number === 0) {
		return "";
	}

	const str_num = number.toString();
	const length = str_num.length;
	const result = [];

	for (let i = 0; i < length; i++) {
		const digit = str_num[i];
		
		if (digit !== '0') {
			const power = length - i - 1;
			result.push(power > 0 ? `${digit}*${Math.pow(10, power)}` : digit);
		}
	}

	return result.join("+");
}
