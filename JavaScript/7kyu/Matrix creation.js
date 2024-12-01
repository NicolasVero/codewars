// Create an identity matrix of the specified size( >= 0).

// Some examples:

// (1)  =>  [[1]]

// (2) => [ [1,0],
//          [0,1] ]

//        [ [1,0,0,0,0],
//          [0,1,0,0,0],
// (5) =>   [0,0,1,0,0],
//          [0,0,0,1,0],
//          [0,0,0,0,1] ] 


function getMatrix(number) {
    const matrix = [];
    
    for(let i = 0; i < number; i++) {
        const matrix_row = [];
        for(let j = 0; j < number; j++) {
            matrix_row.push((i === j) ? 1 : 0);
        }
        matrix.push(matrix_row);
    }
    
    return matrix;
} 