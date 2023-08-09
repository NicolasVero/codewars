function treeByLevels(rootNode) {
    if (rootNode === null) return [];
  
    let results = [];
    let queue = [rootNode];
  
    while (queue.length > 0) {
		let node = queue.shift();
		results.push(node.value);
	
		if (node.left !== null) {
			queue.push(node.left);
		}
	
		if (node.right !== null) {
			queue.push(node.right);
		}
    }
    
    return results;
}