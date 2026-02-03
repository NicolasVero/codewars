// No Story

// No Description

// Only by Thinking and Testing

// Look at the results of the testcases, and guess the code!


function testit(s) {
    return s
        .split(' ')
        .map(word =>
            word.length <= 1
            ? word.toUpperCase()
            : word.slice(0, -1) + word.at(-1).toUpperCase()
        )
        .join(' ');
}
