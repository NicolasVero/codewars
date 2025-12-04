// Description
// In a racing series, all drivers start from a perfectly ordered starting grid. After the race, you are given the moves describing how many positions each driver gained or lost relative to their starting position. A positive value means the driver moved forward (gained places), and a negative value means the driver dropped back (lost places).

// # the driver that started in last position, overtook both drivers before him
// moves = [2, -1, -1]
// Task
// Your task is to determine whether this finishing order is valid, assuming that:

// No two drivers can start in the same position.
// No two drivers can finish in the same position.
// Every driver finishes the race.
// Write a function that:

// Takes an array moves of length n, where moves[i] is the number of positions the driver that finished at position i gained (positive) or lost (negative) compared to their starting position.
// Returns true if there exists a valid race result consistent with the moves.
// Returns false if the configuration is impossible.
// Constraints
// 2 <= n <= 100.
// Examples
// # the driver that started in last position, overtook both drivers before him
// moves = [2, -1, -1]
// return True

// # the race finished in the same order as the starting grid
// moves = [0, 0, 0, 0, 0]
// return True

// # the winner lost a position, which is invalid
// moves = [-1, 1, -1]
// return False

// # the drivers that ended in second and third position, both started last, which is invalid
// moves = [0, 1, 0]
// return False


function validateRace(moves) {
    const n = moves.length;
    const seen = new Set();

    for (let finish = 0; finish < n; finish++) {
        const start = finish + moves[finish];

        if (start < 0 || start >= n || seen.has(start)) {
            return false;
        }

        seen.add(start);
    }

    return true;
}
