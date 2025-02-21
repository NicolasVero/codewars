// Task:
// Build a string representing a capital letter C of a given size out of 'C' characters.

// Examples:
// generate_C(1) should return this string:

// CCCCC C C C CCCCC

// generate_C(2) should be

// CCCCCCCCCC CCCCCCCCCC CC CC CC CC CC CC CCCCCCCCCC CCCCCCCCCC

// and so on. The string returned by generate_C(size) should have 5*size lines, following the format above. size is a positive integer ≤ 2000.

// Note that extra spaces after the C's in any line are incorrect. And the last line should not terminate with "\n".


using System.Text;

public class C_is_for_Codewars {
	public static string GenerateC(int size) {
		if(size < 1) {
			return "";
		}
		
		StringBuilder c = new StringBuilder();
		c.Append(GenerateHorizontal(size));
		c.Append(GenerateVertical(size));
		c.Append(GenerateHorizontal(size));
		
		return c.ToString().TrimEnd('\n');
	}

	public static string GenerateHorizontal(int size) {
		StringBuilder horizontal = new StringBuilder();

		string line = new string('C', 5 * size) + "\n";
		for(int i = 0; i < size; i++) {
			horizontal.Append(line);
		} 

		return horizontal.ToString();
	}

	public static string GenerateVertical(int size) {
		StringBuilder vertical = new StringBuilder();

		string line = new string('C', size) + "\n";
		for(int i = 0; i < size * 3; i++) {
			vertical.Append(line);
		} 

		return vertical.ToString();
	}
}
