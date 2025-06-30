// Write function parseFloat which takes an input and returns a number or Nothing if conversion is not possible.


export function parseF(s: string): number|null {
    const value: any = Number.parseFloat(s);
    return Number.isNaN(value) ? null : value;
}
