// Implement an algorithm which analyzes a two-color image and determines how many isolated areas of a single color the image contains.

// Islands
// An "island" is a set of adjacent pixels of one color (1) which is surrounded by pixels of a different color (0). Pixels are considered adjacent if their coordinates differ by no more than 1 on the X or Y axis.

// Below you can see an example with 2 islands:

// on the left in the form of a matrix of 1's and 0's
// on the right in an equivalent stringified form using "X" and "~" characters for better readability
// [
//   [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
//   [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
//   [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
//   [0,0,0,0,0,0,0,0,1,0],          "~~~~~~~~X~"
//   [0,0,0,0,0,1,1,1,0,0],          "~~~~~XXX~~"
//   [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
// ]
// Specification
// Your task is to implement a function which accepts a matrix containing the numbers 0 and 1. It should return the number of islands as an integer.


function countIslands(image) {
    if(image.length == 0) return;
    
    let counter = 0;
    
    for(let i = 0; i < image.length; i++) {
		for(let j = 0; j < image[0].length; j++) {
			if(image[i][j] === 1) {
				counter++;
				destroyIsland(image, i ,j);
			}
		}
    }
    return counter;
    
    function destroyIsland(image, i, j) {
      	if(i < 0 || j < 0 || i >= image.length || j >= image[0].length || image[i][j] !== 1) return;
      
      	image[i][j] = 0;
  
      	const movements = [-1, 0, 1];
      
      	for(const di of movements) {
          	for(const dj of movements) {
              	if(di === 0 && dj === 0) continue;
              	destroyIsland(image, i + di, j + dj);
          	}
      	}
    }
}