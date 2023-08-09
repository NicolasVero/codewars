// Create two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails". First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string.

// For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:

// W       E       C       R       L       T       E
//   E   R   D   S   O   E   E   F   E   A   O   C  
//     A       I       V       D       E       N    
// The encoded string would be:

// WECRLTEERDSOEEFEAOCAIVDEN
// Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.

// Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.

// For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.

// Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that include punctuation. Don't filter out punctuation as they are a part of the string.



function encodeRailFenceCipher(string, numberRails) {
  
	let strings = new Array(numberRails).fill('');
	let position = 0;
	let have_bounce = false;
	
	for(let i = 0; i < string.length; i++) {
		
		strings[position] += string.charAt(i);
		
		if(position === numberRails - 1 || position === 0)
		have_bounce = !have_bounce;
		
		if(position < numberRails && have_bounce) position++;
		else position--;
	}
	
	let encode_string = '';
	
	strings.forEach((e) => {
		encode_string += e;
	});

	return encode_string;
}

function decodeRailFenceCipher(string, numberRails) {

	let split_string = get_split_string(string, get_cells_length(string, numberRails));
	let decode_string = '';
	let position = 0;
	let have_bounce = false;
	let arr_position = new Array(numberRails).fill(0);
	
	for(let i = 0; i < string.length; i++) {
		
		decode_string += split_string[position].charAt(arr_position[position]);
		arr_position[position] += 1;
		
		if(position === numberRails - 1 || position === 0)
		have_bounce = !have_bounce;
		
		if(position < numberRails && have_bounce) position++;
		else position--;
	}
	
	return decode_string;
	
	
	function get_split_string(string, letter_count) {
		
		let split_string = [];
		let start = 0;
		let end = letter_count[0];

		for(let i = 0; i < letter_count.length; i++) {

			split_string[i] = string.slice(start, end);
			start = end;
			end = (i + 1 < letter_count.length) ? end + letter_count[i + 1] : letter_count.length;
		}

		return split_string;
	}
	
	function get_cells_length(string, numberRails) {
		
		let letter_count = new Array(numberRails).fill(0);
		let have_bounce = false;
		let position = 0;
		
		for(let i = 0; i < string.length; i++) {
		
			letter_count[position] += 1;

			if(position === numberRails - 1 || position === 0)
				have_bounce = !have_bounce;

			if(position < numberRails && have_bounce) position++;
			else position--;
		}

		return letter_count;
	}
}