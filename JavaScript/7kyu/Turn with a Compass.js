// You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

// Return the direction you will face after the turn.

// Examples
// "S",  180  -->  "N"
// "SE", -45  -->  "E"
// "W",  495  -->  "NE"


function direction(facing, turn) {
    const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    
    const start = dirs.indexOf(facing);
    const steps = turn / 45;
    let new_index = (start + steps) % 8;

    if (new_index < 0) {
        new_index += 8;
    }
        
    return dirs[new_index];
}
