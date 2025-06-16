// Extend the String object (JS) or create a function (Python, C#) that converts the value of the String to and from Base64 using the ASCII (UTF-8 for C#) character set.

// Example (input -> output):
// 'this is a string!!' -> 'dGhpcyBpcyBhIHN0cmluZyEh'
// You can learn more about Base64 encoding and decoding here.

// Note: This kata uses the non-padding version ("=" is not added to the end).


export function toBase64(str: string): string {
    const encoded = Buffer.from(str, 'ascii').toString('base64');
    return encoded.replace(/=+$/, '');
}

export function fromBase64(str: string): string {
    const padding_length = (4 - (str.length % 4)) % 4;
    const padded = str + '='.repeat(padding_length);
    return Buffer.from(padded, 'base64').toString('ascii');
}
