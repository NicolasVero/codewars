// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!


export const sayHello = (names: string[], city: string, state: string):string => {
    const full_name: string = names.join(' ');
    return `Hello, ${full_name}! Welcome to ${city}, ${state}!`;
}
