// Implement all required functions in order to create the following sentences by calling those functions:

// Adam(has(a(dog()))); // must return "Adam has a dog."
// The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."


function Adam(arg) {
    return arg ? `Adam ${arg}.` : "Adam";
}

function has(arg) {
    return `has ${arg}`;
}

function a(arg) {
    return `a ${arg}`;
}

function dog(arg) {
    return arg ? `dog ${arg}` : "dog";
}

function The(arg) {
    return `The ${arg.charAt(0).toLowerCase() + arg.slice(1)}.`; 
}

function name(arg) {
    return `name ${arg}`;
}

function of(arg) {
    return `of ${arg}`;
}

function the(arg) {
    return `the ${arg}`;
}

function is(arg) {
    return `is ${arg}`;
}

function also(arg) {
    return `also ${arg}`;
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
