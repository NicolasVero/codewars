// You are given a node that is the beginning of a linked list. This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.

// For example in the following picture the size of the dangling piece is 3 and the loop size is 12:


// // Use the `getNext' method or 'next' property to get the following node.
// node.getNext()
// node.next
// Notes:

// do NOT mutate the nodes!
// in some cases there may be only a loop, with no dangling piece

function loop_size(node) {

    let slow = node;
    let fast = node;
  
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    
        if (slow === fast) break;
    }
  
    if (fast === null || fast.next === null) return 0;
  
    let loopStart = slow;
    let loopLength = 0;
    
    do {
        slow = slow.next;
        loopLength++;
    } while (slow !== loopStart);
  
    return loopLength;
}
  