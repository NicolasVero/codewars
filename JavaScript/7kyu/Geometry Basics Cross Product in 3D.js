// This series of katas will introduce you to basics of doing geometry with computers.

// Vector objects (struct in C) have x, y, and z attributes. x, y and z are floating-point numbers.

// Write a function calculating the cross product of Vector a and Vector b, the result should be a Vector object.


function crossProduct(v1, v2) {
    const x = v1.y * v2.z - v1.z * v2.y;
    const y = v1.z * v2.x - v1.x * v2.z;
    const z = v1.x * v2.y - v1.y * v2.x;

    const fix = n => Object.is(n, -0) ? 0 : n;

    return { x: fix(x), y: fix(y), z: fix(z) };
}
