// Imagine a circle. To encode the word codewars, we could split the circle into 8 parts (as codewars has 8 letters):

// Then add the letters in a clockwise direction:Then remove the circle:
// If we read the result from left to right, we get csordaew.

// Decoding is the same process in reverse. If we decode csordaew, we get codewars.

// Examples:
// encode "codewars" -> "csordaew"
// decode "csordaew" -> "codewars"
// encode "white" -> "wehti"
// decode "wehti" -> "white"


export function encode(s: string): string {
    let result = "";
    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
        if (left === right) {
            result += s[left];
        } else {
            result += s[left] + s[right];
        }
        
        left++;
        right--;
    }

    return result;
}

export function decode(s: string): string {
    const n = s.length;
    const resultArr = new Array<string>(n);
    let left = 0;
    let right = n - 1;
    let i = 0;

    while (left <= right) {
        if (left === right) {
            resultArr[left] = s[i];
        } else {
            resultArr[left] = s[i];
            resultArr[right] = s[i + 1];
        }
        
        left++;
        right--;
        i += 2;
    }

    return resultArr.join("");
}
