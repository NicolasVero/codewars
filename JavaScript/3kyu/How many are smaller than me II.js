// Write

// function smaller(arr)
// that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

// For example:

// smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
// smaller([1, 2, 0]) === [1, 1, 0]
// Note
// Your solution will be tested against inputs with up to 100_000 elements



function BSTNode(val) {
    this.dup   = 1;
    this.left  = null;
    this.right = null;
    this.val   = val;
    this.count = 0;
}

const insert = (root, num, result, sum, i) => {
    if(root === null) {
        result[i] = sum;
        return new BSTNode(num);
    }

    if(root.val === num) {
        root.dup++;
        result[i] = sum + root.count;
    } else if (root.val > num) {
        root.count++;
        root.left = insert(root.left, num, result, sum, i);
    } else {
        root.right = insert(root.right, num, result, sum + root.count + root.dup, i);
    }
    return root;
}

function smaller(arr) {
    let result = Array(arr.length).fill(0);
    let root   = null;
    for(let i = arr.length; i--;)
        root = insert(root, arr[i], result, 0, i);

    return result;
}