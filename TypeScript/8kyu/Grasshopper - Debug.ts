// Debug celsius converter
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)
// Please round to 5dp (use Math.round())


export function weatherInfo(temp: number): string {
    const c = convertToCelsius(temp);
    const rounded = Math.round(c * 1e5) / 1e5;

    return (c < 0)
        ? `${rounded} is freezing temperature`
        : `${rounded} is above freezing temperature`;
}

export function convertToCelsius(temperature: number): number {
    const celsius = (temperature - 32) * (5 / 9);
    return Math.round(celsius * 1e5) / 1e5;
}
