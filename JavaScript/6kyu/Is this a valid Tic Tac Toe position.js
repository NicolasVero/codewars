// You work as a data scientist at an IT company, and your boss, all of a sudden, asked you to find the most common patterns in Tic Tac Toe games submitted to a survey on your company's website.

// However, some of them are not from real games, i. e. the position on such a game board cannot be reached through normal play.

// You have to find a way to filter out such "games", leaving only the correct (reachable) ones.

// Task
// You will be given a 3x3 list of characters (see Initial Solution and Sample Tests for the particular encoding used in your language) representing a Tic Tac Toe game board, with the following specifications:

// 'X' is a square occupied by player X,
// 'O' is a square occupied by player O,
// '_' is a square not occupied by either player.
// Given this board, you need to determine whether this board represents a position that is reachable through normal play, and return a boolean value: true (if the condition is satisfied) and false otherwise.

// Validation rules:

// 'X' should always be the first player to move.
// During one move, a player must occupy one extra square.
// If a player manages to occupy 3 squares in a row (horizontally, vertically or diagonally), the game is immediately over and no further moves can be made; that player wins and is declared victorious (such a game is valid).
// If all squares are occupied and neither player managed to get 3 in a row, the game ends in a draw (which is valid).
// Games where not all squares are occupied and neither player got 3 in a row are considered valid.
// Special case: This board (and similar ones where 'X' has two three-in-a-rows but the position can be reached):

// X X X
// O O X
// O O X
// should result in true.

// The board is guaranteed to be 3x3 and to consist of only 'X', 'O' or '_'.

// Good luck!


function isValid(board) {
    const flat = board.join('');
    const x_count = [...flat].filter(c => c === 'X').length;
    const o_count = [...flat].filter(c => c === 'O').length;

    if (x_count < o_count || x_count - o_count > 1) return false;

    const winners = get_winners(board);

    if (winners.length > 1) return false;

    if (winners[0] === 'X' && x_count !== o_count + 1) return false;
    if (winners[0] === 'O' && x_count !== o_count) return false;

    return true;
}

function get_winners(board) {
    const lines = [];

    lines.push(...board);

    for (let col = 0; col < 3; col++) {
        lines.push(board.map(row => row[col]).join(''));
    }

    lines.push(board.map((row, i) => row[i]).join(''));
    lines.push(board.map((row, i) => row[2 - i]).join(''));

    const winners = new Set();

    for (const line of lines) {
        if (line === 'XXX') winners.add('X');
        if (line === 'OOO') winners.add('O');
    }

    return [...winners];
}
