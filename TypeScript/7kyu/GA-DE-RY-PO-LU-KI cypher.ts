// Introduction
// The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. The encryption is based on short, easy to remember key. The key is written as paired letters, which are in the cipher simple replacement.

// The most frequently used key is "GA-DE-RY-PO-LU-KI".

//  G => A
//  g => a
//  a => g
//  A => G
//  D => E
//   etc.
// The letters, which are not on the list of substitutes, stays in the encrypted text without changes.

// Task
// Your task is to help scouts to encrypt and decrypt thier messages. Write the Encode and Decode functions.

// Input/Output
// The input string consists of lowercase and uperrcase characters and white . The substitution has to be case-sensitive.

// Example
//  Encode("ABCD")          // => GBCE 
//  Encode("Ala has a cat") // => Gug hgs g cgt 
//  Encode("gaderypoluki"); // => agedyropulik
//  Decode("Gug hgs g cgt") // => Ala has a cat 
//  Decode("agedyropulik")  // => gaderypoluki
//  Decode("GBCE")          // => ABCD


export function encode(str: string): string {
    const key = "GADERYPOLUKI";
    const map = new Map<string, string>();
  
    for(let i = 0; i < key.length; i += 2) {
        map.set(key[i], key[i + 1]);
        map.set(key[i + 1], key[i]);
        map.set(key[i].toLowerCase(), key[i + 1].toLowerCase());
        map.set(key[i + 1].toLowerCase(), key[i].toLowerCase());
    }
  
    return str.split('').map(char => map.get(char) || char).join('');
}
  
export function decode(str: string): string {
    return encode(str);
}