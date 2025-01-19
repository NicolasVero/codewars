// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28


export const centuryFromYear = (year: number): number => {
    const additionner: number = (year % 100 === 0) ? 0 : 1;
    const string_year: string = year.toString();
    return parseInt(string_year.slice(0, string_year.length - 2)) + additionner; 
};